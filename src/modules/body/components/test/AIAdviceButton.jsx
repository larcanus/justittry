import React, { useState } from 'react';

/**
 * Компонент для получения AI-совета по результатам теста
 */
const AIAdviceButton = ({ testData }) =>
{
	const [loading, setLoading] = useState(false);
	const [advice, setAdvice] = useState(null);
	const [error, setError] = useState(null);

	/**
	 * Агрегирует данные теста для отправки на сервер
	 */
	const aggregateTestData = () =>
	{
		// TODO: Реализовать полную агрегацию данных
		return {
			testName: testData.testName,
			difficulty: testData.difficulty,
			score: testData.percentage,
			correctAnswers: testData.correctCount,
			totalQuestions: testData.totalCount,
			elapsedTime: testData.elapsedTime,
			passed: testData.passed
		};
	};

	/**
	 * Отправляет запрос на сервер для получения AI-совета
	 */
	const fetchAIAdvice = async () =>
	{
		setLoading(true);
		setError(null);

		try
		{
			const payload = aggregateTestData();
			console.log('payload', payload)
			const response = await fetch('https://rulser-proxyai.store/deepseek', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					model: "deepseek-coder",
					messages: [{ role: 'user', content: 'Привет! Кто ты?' }],
					userId: 'test-browser'
				})
			});

			if (!response.ok)
			{
				throw new Error('Не удалось получить совет от AI');
			}

			const data = await response.json();
			console.log('Ответ от DeepSeek:', data);
			setAdvice(data?.content || data?.message || 'Что-то пошло не так :(');
		} catch (err)
		{
			setError(err.message || 'Произошла ошибка при получении совета');
		} finally
		{
			setLoading(false);
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
				disabled={ loading }
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
