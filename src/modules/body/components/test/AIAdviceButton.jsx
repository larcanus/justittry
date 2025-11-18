import React, { useEffect, useRef, useState } from 'react';
import { parseMarkdown } from '../../../../common/utils';

// Fallback хранилище в памяти
const memoryStorage = {
	data: {},
	getItem(key)
	{
		return this.data[key] || null;
	},
	setItem(key, value)
	{
		this.data[key] = value;
	}
};

/**
 * Безопасная работа с localStorage
 */
const safeLocalStorage = {
	getItem(key)
	{
		try
		{
			return localStorage.getItem(key);
		} catch (e)
		{
			console.warn('localStorage недоступен, используется память:', e.message);
			return memoryStorage.getItem(key);
		}
	},
	setItem(key, value)
	{
		try
		{
			localStorage.setItem(key, value);
		} catch (e)
		{
			console.warn('localStorage недоступен, используется память:', e.message);
			memoryStorage.setItem(key, value);
		}
	}
};

/**
 * Безопасная работа с sessionStorage
 */
const safeSessionStorage = {
	getItem(key)
	{
		try
		{
			return sessionStorage.getItem(key);
		} catch (e)
		{
			console.warn('sessionStorage недоступен, используется память:', e.message);
			return memoryStorage.getItem(key);
		}
	},
	setItem(key, value)
	{
		try
		{
			sessionStorage.setItem(key, value);
		} catch (e)
		{
			console.warn('sessionStorage недоступен, используется память:', e.message);
			memoryStorage.setItem(key, value);
		}
	}
};

/**
 * Генерирует уникальный fingerprint браузера
 */
const getBrowserFingerprint = () =>
{
	// Проверяем localStorage
	let fingerprint = safeLocalStorage.getItem('browser_fingerprint');

	if (!fingerprint)
	{
		try
		{
			// Создаем новый fingerprint на основе доступных данных
			const nav = navigator;
			const screen = window.screen;

			const data = [
				nav.userAgent || 'unknown',
				nav.language || 'unknown',
				screen.colorDepth || 0,
				screen.width + 'x' + screen.height,
				new Date().getTimezoneOffset(),
				!!window.sessionStorage,
				!!window.localStorage
			].join('|');

			// Простой хеш
			let hash = 0;
			for (let i = 0; i < data.length; i++)
			{
				const char = data.charCodeAt(i);
				hash = ((hash << 5) - hash) + char;
				hash = hash & hash;
			}

			fingerprint = 'fp_' + Math.abs(hash).toString(36) + '_' + Date.now().toString(36);
			safeLocalStorage.setItem('browser_fingerprint', fingerprint);
		} catch (e)
		{
			console.error('Ошибка создания fingerprint:', e);
			// Генерируем временный ID
			fingerprint = 'temp_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 9);
		}
	}

	return fingerprint;
};

/**
 * Получает информацию о сессии
 */
const getSessionInfo = () =>
{
	try
	{
		const sessionId = safeSessionStorage.getItem('session_id') ||
			'session_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 9);

		if (!safeSessionStorage.getItem('session_id'))
		{
			safeSessionStorage.setItem('session_id', sessionId);
			safeSessionStorage.setItem('session_start', new Date().toISOString());
		}

		return {
			sessionId,
			sessionStart: safeSessionStorage.getItem('session_start') || new Date().toISOString(),
			pageViews: parseInt(safeSessionStorage.getItem('page_views') || '0') + 1
		};
	} catch (e)
	{
		console.error('Ошибка получения информации о сессии:', e);
		// Возвращаем временные данные
		return {
			sessionId: 'temp_session_' + Date.now(),
			sessionStart: new Date().toISOString(),
			pageViews: 1
		};
	}
};

/**
 * Собирает метаданные о браузере и устройстве
 */
const collectBrowserMetadata = () =>
{
	try
	{
		const nav = navigator;
		const screen = window.screen;

		return {
			userAgent: nav.userAgent || 'unknown',
			language: nav.language || 'unknown',
			platform: nav.platform || 'unknown',
			screenResolution: `${ screen.width || 0 }x${ screen.height || 0 }`,
			colorDepth: screen.colorDepth || 0,
			timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown',
			timezoneOffset: new Date().getTimezoneOffset(),
			referrer: document.referrer || 'direct',
			viewport: `${ window.innerWidth || 0 }x${ window.innerHeight || 0 }`
		};
	} catch (e)
	{
		console.error('Ошибка сбора метаданных браузера:', e);
		return {
			userAgent: 'unknown',
			language: 'unknown',
			platform: 'unknown',
			screenResolution: '0x0',
			colorDepth: 0,
			timezone: 'unknown',
			timezoneOffset: 0,
			referrer: 'unknown',
			viewport: '0x0'
		};
	}
};

/**
 * Компонент для получения AI-совета по результатам теста
 */
const AIAdviceButton = ({ testData, testName, stats }) =>
{
	const [loading, setLoading] = useState(false);
	const [advice, setAdvice] = useState(null);
	const [error, setError] = useState(null);

	// Флаг для отслеживания монтирования компонента
	const isMountedRef = useRef(true);
	// Контроллер для отмены запроса
	const abortControllerRef = useRef(null);

	// Cleanup при размонтировании
	useEffect(() =>
	{
		try
		{
			// Увеличиваем счетчик просмотров страниц
			const views = parseInt(safeSessionStorage.getItem('page_views') || '0');
			safeSessionStorage.setItem('page_views', (views + 1).toString());
		} catch (e)
		{
			console.warn('Не удалось обновить счетчик просмотров:', e);
		}

		return () =>
		{
			isMountedRef.current = false;
			// Отменяем запрос, если он выполняется
			if (abortControllerRef.current)
			{
				abortControllerRef.current.abort();
			}
		};
	}, []);

	const prompt = `Проанализируй результаты теста по ${ testName } и предоставь развернутую аналитику. 

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

	/**
	 * Агрегирует данные теста для отправки на сервер
	 */
	const aggregateTestData = () =>
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
	 * Отправляет запрос на сервер для получения AI-совета
	 */
	const fetchAIAdvice = async () =>
	{
		// Отменяем предыдущий запрос, если он есть
		if (abortControllerRef.current)
		{
			abortControllerRef.current.abort();
		}

		// Создаем новый контроллер для текущего запроса
		abortControllerRef.current = new AbortController();

		setLoading(true);
		setError(null);

		try
		{
			const payload = aggregateTestData();

			if (!payload)
			{
				throw new Error('Нет данных для отправки');
			}

			// Собираем информацию о пользователе и сессии
			const fingerprint = getBrowserFingerprint();
			const sessionInfo = getSessionInfo();
			const browserMetadata = collectBrowserMetadata();
			const bodyData = {
				messages: [{
					role: 'user',
					content: payload,
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
			console.log('bodyData', bodyData)
			const response = await fetch('https://rulser-proxyai.store/deepseek', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(bodyData),
				signal: abortControllerRef.current.signal
			});

			if (!response.ok)
			{
				throw new Error('Не удалось получить совет от AI');
			}

			const data = await response.json();
			console.log('Ответ от DeepSeek:', data);

			// Обновляем состояние только если компонент все еще смонтирован
			if (isMountedRef.current)
			{
				setAdvice(data?.content || data?.message || 'Что-то пошло не так :(');
			}
		} catch (err)
		{
			// Игнорируем ошибку отмены запроса
			if (err.name === 'AbortError')
			{
				console.log('Запрос был отменен');
				return;
			}

			console.error('Ошибка при получении совета:', err);

			// Обновляем состояние только если компонент все еще смонтирован
			if (isMountedRef.current)
			{
				setError(err.message || 'Произошла ошибка при получении совета');
			}
		} finally
		{
			// Обновляем состояние только если компонент все еще смонтирован
			if (isMountedRef.current)
			{
				setLoading(false);
			}
		}
	};

	/**
	 * Обработчик клика по кнопке
	 */
	const handleClick = () =>
	{
		if (!loading && !advice)
		{
			fetchAIAdvice();
		}
	};

	// Если уже получен ответ или ошибка - показываем блок с результатом
	if (advice || error)
	{
		return (
			<div className='ai-advice'>
				<div className='ai-advice__response'>
					<div className='ai-advice__header'>
						<div className='ai-advice__icon'>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"
									  strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
									  strokeLinejoin="round"/>
								<path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
									  strokeLinejoin="round"/>
							</svg>
						</div>
						<span className='ai-advice__title'>
                            { error ? 'Ошибка' : 'Совет от AI' }
                        </span>
					</div>
					<div className='ai-advice__content'>
						{ error ? (
							<p className='ai-advice__text--error'>{ error }</p>
						) : (
							parseMarkdown(advice)
						) }
					</div>
				</div>
			</div>
		);
	}

	// Показываем кнопку
	return (
		<div className='ai-advice'>
			<button
				className='ai-advice__button'
				onClick={ handleClick }
				disabled={ loading || !testData }
			>
				<div className='ai-advice__button-icon'>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
						<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
							  strokeLinejoin="round"/>
						<path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
							  strokeLinejoin="round"/>
						<path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
							  strokeLinejoin="round"/>
					</svg>
				</div>
				<span className='ai-advice__button-text'>
                    { loading ? (
						<span className='ai-advice__loader'>
                            <span className='ai-advice__loader-dot'></span>
                            <span className='ai-advice__loader-dot'></span>
                            <span className='ai-advice__loader-dot'></span>
                        </span>
					) : (
						'Получить совет от AI'
					) }
                </span>
			</button>
		</div>
	);
};

export default AIAdviceButton;
