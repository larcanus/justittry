import React, { useState, useEffect, useRef } from 'react';

/**
 * Компонент для получения AI-совета по результатам теста
 */
const AIAdviceButton = ({testData, testName, stats}) =>
{
	const [loading, setLoading] = useState(false);
	const [advice, setAdvice] = useState(null);
	const [error, setError] = useState(null);

	// Флаг для отслеживания монтирования компонента
	const isMountedRef = useRef(true);
	// Контроллер для отмены запроса
	const abortControllerRef = useRef(null);

	// Cleanup при размонтировании
	useEffect(() => {
		return () => {
			isMountedRef.current = false;
			// Отменяем запрос, если он выполняется
			if (abortControllerRef.current) {
				abortControllerRef.current.abort();
			}
		};
	}, []);

	const prePrompt = `Проанализируй результаты теста по ${testName}. Обрати внимание на:` +
		'1. Вопросы с статусом "incorrect" - где пользователь ошибся\n' +
		'2. Вопросы с статусом "skipped" - что пользователь пропустил  \n' +
		'3. Вопросы с difficulty="easy" но статусом "incorrect" - базовые пробелы\n' +
		'4. Дай рекомендации по темам для изучения с ссылками на документацию' +
		'5. Не используй наименования статусов в ответе, замени на: верно, неверно, пропущен';

	/**
	 * Агрегирует данные теста для отправки на сервер
	 */
	const aggregateTestData = () =>
	{
		if (!testData) {
			console.warn('testResultData отсутствует');
			return null;
		}
		const preparedData = {
			prePrompt,
			stats,
			questions:testData,
		}
		console.log('Агрегированные данные:', preparedData);
		return preparedData;
	};


	/**
	 * Отправляет запрос на сервер для получения AI-совета
	 */
	const fetchAIAdvice = async () =>
	{
		// Отменяем предыдущий запрос, если он есть
		if (abortControllerRef.current) {
			abortControllerRef.current.abort();
		}

		// Создаем новый контроллер для текущего запроса
		abortControllerRef.current = new AbortController();

		setLoading(true);
		setError(null);

		try
		{
			const payload = aggregateTestData();

			if (!payload) {
				throw new Error('Нет данных для отправки');
			}

			console.log('Отправляемый payload:', payload);

			const response = await fetch('https://rulser-proxyai.store/deepseek', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					model: "deepseek-coder",
					messages: [{
						role: 'user',
						content: `Проанализируй результаты теста: ${JSON.stringify(payload)}`
					}],
					userId: 'test-browser'
				}),
				signal: abortControllerRef.current.signal
			});

			if (!response.ok)
			{
				throw new Error('Не удалось получить совет от AI');
			}

			const data = await response.json();
			console.log('Ответ от DeepSeek:', data);

			// Обновляем состояние только если компонент все еще смонтирован
			if (isMountedRef.current) {
				setAdvice(data?.content || data?.message || 'Что-то пошло не так :(');
			}
		} catch (err)
		{
			// Игнорируем ошибку отмены запроса
			if (err.name === 'AbortError') {
				console.log('Запрос был отменен');
				return;
			}

			console.error('Ошибка при получении совета:', err);

			// Обновляем состояние только если компонент все еще смонтирован
			if (isMountedRef.current) {
				setError(err.message || 'Произошла ошибка при получении совета');
			}
		} finally
		{
			// Обновляем состояние только если компонент все еще смонтирован
			if (isMountedRef.current) {
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
						<p className={ error ? 'ai-advice__text--error' : 'ai-advice__text' }>
							{ error || advice }
						</p>
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
