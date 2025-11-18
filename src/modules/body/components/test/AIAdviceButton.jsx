import React, { useEffect, useRef, useState } from 'react';
import { parseMarkdown } from '../../../../common/utils';
import { incrementPageViews } from '../../../../common/utils/sessionUtils';
import { fetchAIAdvice } from '../../../../common/utils/aiApiUtils';

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
		// Увеличиваем счетчик просмотров страниц
		incrementPageViews();

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

	/**
	 * Отправляет запрос на сервер для получения AI-совета
	 */
	const handleFetchAIAdvice = async () =>
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
			const result = await fetchAIAdvice(
				testData,
				stats,
				testName,
				abortControllerRef.current.signal
			);

			// Обновляем состояние только если компонент все еще смонтирован
			if (isMountedRef.current)
			{
				setAdvice(result);
			}
		} catch (err)
		{
			// Игнорируем ошибку отмены запроса
			if (err.name === 'AbortError')
			{
				console.log('⚠️ Запрос был отменен');
				return;
			}

			console.error('❌ Ошибка при получении совета:', err);
			console.error('- Name:', err.name);
			console.error('- Message:', err.message);
			console.error('- Stack:', err.stack);

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
			handleFetchAIAdvice();
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
