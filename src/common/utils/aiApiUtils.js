/**
 * Утилиты для работы с AI API
 */

import { getBrowserFingerprint, getSessionInfo } from './sessionUtils';
import { collectBrowserMetadata } from './browserUtils';

/**
 * Создает промпт для AI-анализа результатов теста
 */
export const createTestAnalysisPrompt = (testName) => {
	return `Проанализируй результаты теста по ${testName} и предоставь развернутую аналитику. 

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
export const aggregateTestData = (testData, stats, prompt) => {
	if (!testData) {
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
export const createAIRequestPayload = (testData, stats, testName, prompt) => {
	const payload = aggregateTestData(testData, stats, prompt);

	if (!payload) {
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
 * Отправляет запрос на AI API
 */
export const fetchAIAdvice = async (testData, stats, testName, abortSignal) => {
	const prompt = createTestAnalysisPrompt(testName);
	const bodyData = createAIRequestPayload(testData, stats, testName, prompt);

	console.log('bodyData', bodyData);

	const response = await fetch('https://rulser-proxyai.store/deepseek', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(bodyData),
		signal: abortSignal
	});

	if (!response.ok) {
		const errorData = await response.json().catch(() => null);
		console.error('❌ Ошибка сервера:', errorData);
		throw new Error(errorData?.message || errorData?.error || 'Не удалось получить совет от AI');
	}

	const data = await response.json();
	console.log('✅ Ответ от DeepSeek:', data);

	return data?.content || data?.message || 'Что-то пошло не так :(';
};