/**
 * Утилиты для работы с AI API
 */

import { getBrowserFingerprint, getSessionInfo } from './sessionUtils';
import { collectBrowserMetadata } from './browserUtils';

/**
 * Создает промпт для AI-анализа результатов теста
 */
export const createTestAnalysisPrompt = (testName) =>
{
	return `Проанализируй результаты теста по ${ testName } и предоставь развернутую аналитику. 

Основные аспекты для анализа:
1. Вопросы, где пользователь ответил неверно - выяви системные ошибки и misconceptions
2. Пропущенные вопросы - определи темы, которые вызывают неуверенность
3. Базовые вопросы (difficulty="easy"), ответленные неверно - укажи на фундаментальные пробелы
4. Дай конкретные рекомендации по темам для изучения с ссылками на официальную документацию
5. Предложи план улучшения знаний, сгруппированный по приоритетам

Важные требования:
- Не используй термины "incorrect", "skipped" в финальном ответе, заменяй на: верно/неверно/пропущен
- Группируй рекомендации по темам, а не по отдельным вопросам
- Указывай конкретные разделы документации для каждой проблемной темы
- Оцени общий уровень подготовки и дай реалистичные рекомендации`;
};

/**
 * Агрегирует данные теста для отправки на сервер
 */
export const aggregateTestData = (testData, stats, prompt) =>
{
	if (!testData)
	{
		console.warn('testResultData отсутствует');
		return null;
	}
	return {
		prompt,
		stats,
		questions: testData,
	};
};

/**
 * Создает payload для отправки на AI API
 */
export const createAIRequestPayload = (testData, stats, testName, prompt, streaming = true) =>
{
	const payload = aggregateTestData(testData, stats, prompt);

	if (!payload)
	{
		throw new Error('Нет данных для отправки');
	}

	// Собираем информацию о пользователе и сессии
	const fingerprint = getBrowserFingerprint();
	const sessionInfo = getSessionInfo();
	const browserMetadata = collectBrowserMetadata();

	return {
		messages: [{
			role: 'user',
			content: JSON.stringify(payload)
		}],
		// Включаем streaming
		stream: streaming,
		// Уникальный идентификатор браузера
		userId: fingerprint,
		// Дополнительные метаданные для аналитики
		metadata: {
			// Информация о сессии
			sessionId: sessionInfo.sessionId,
			sessionStart: sessionInfo.sessionStart,
			pageViews: sessionInfo.pageViews,

			// Контекст теста
			testName: testName,
			testStats: {
				total: stats?.totalCount || 0,
				correct: stats?.correctCount || 0,
				incorrect: stats?.errorCount || 0,
				percentage: stats?.percentage || 0,
			},

			// Информация о браузере
			browser: browserMetadata,

			// Временные метки
			requestTime: new Date().toISOString(),

			// Источник запроса
			source: 'test-results-page',
		}
	};
};

/**
 * Обрабатывает streaming ответ от AI API
 * @param {Response} response - Fetch Response объект
 * @param {Function} onChunk - Callback для обработки каждого чанка (content) => void
 * @param {AbortSignal} abortSignal - Сигнал для отмены запроса
 * @returns {Promise<string>} - Полный текст ответа
 */
export const processStreamingResponse = async (response, onChunk, abortSignal) =>
{
	const reader = response.body.getReader();
	const decoder = new TextDecoder();
	let fullContent = '';
	let buffer = '';

	try
	{
		while (true)
		{
			// Проверяем отмену
			if (abortSignal?.aborted)
			{
				reader.cancel();
				throw new DOMException('Request aborted', 'AbortError');
			}

			const { done, value } = await reader.read();

			if (done)
			{
				console.log('✅ Stream completed, total length:', fullContent.length);
				break;
			}

			// Декодируем чанк
			buffer += decoder.decode(value, { stream: true });

			// Обрабатываем построчно (SSE формат)
			const lines = buffer.split('\n');
			buffer = lines.pop() || ''; // Сохраняем неполную строку

			for (const line of lines)
			{
				const trimmedLine = line.trim();

				if (!trimmedLine || trimmedLine.startsWith(':'))
				{
					continue; // Пропускаем пустые строки и комментарии
				}

				if (trimmedLine.startsWith('data: '))
				{
					const data = trimmedLine.slice(6);

					if (data === '[DONE]')
					{
						console.log('📝 Stream finished with [DONE] marker');
						return fullContent;
					}

					try
					{
						const parsed = JSON.parse(data);
						const delta = parsed.choices?.[0]?.delta;
						const content = delta?.content;

						if (content)
						{
							fullContent += content;
							// Вызываем callback для обновления UI
							onChunk(content);
						}
					} catch (e)
					{
						console.warn('⚠️ Failed to parse SSE chunk:', e, 'data:', data);
					}
				}
			}
		}

		return fullContent;
	} catch (error)
	{
		if (error.name === 'AbortError')
		{
			console.log('⚠️ Stream reading aborted');
		}
		throw error;
	} finally
	{
		reader.releaseLock();
	}
};

/**
 * Отправляет запрос на AI API с поддержкой streaming
 * @param {Object} testData - Данные теста
 * @param {Object} stats - Статистика теста
 * @param {string} testName - Название теста
 * @param {AbortSignal} abortSignal - Сигнал для отмены запроса
 * @param {Function} onChunk - Callback для обработки streaming чанков
 * @returns {Promise<string>} - Полный текст ответа
 */
export const fetchAIAdvice = async (testData, stats, testName, abortSignal, onChunk = null) =>
{
	const prompt = createTestAnalysisPrompt(testName);
	const streaming = typeof onChunk === 'function';
	const bodyData = createAIRequestPayload(testData, stats, testName, prompt, streaming);

	console.log('🚀 Sending request to AI API, streaming:', streaming);

	const response = await fetch('https://rulser-proxyai.store/deepseek/justittry', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(bodyData),
		signal: abortSignal
	});

	if (!response.ok)
	{
		const errorData = await response.json().catch(() => null);
		console.error('❌ Ошибка сервера:', errorData);
		throw new Error(errorData?.message || errorData?.error || 'Не удалось получить совет от AI');
	}

	// Если streaming включен
	if (streaming)
	{
		console.log('📡 Processing streaming response...');
		return await processStreamingResponse(response, onChunk, abortSignal);
	}

	// Обычный non-streaming ответ (для обратной совместимости)
	const data = await response.json();
	console.log('✅ Ответ от DeepSeek:', data);

	return data?.content || data?.message || 'Что-то пошло не так :(';
};
