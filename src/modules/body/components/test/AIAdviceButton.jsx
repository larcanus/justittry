import React, { useState, useEffect, useRef } from 'react';

/**
 * Парсит markdown-текст в React-элементы
 */
const parseMarkdown = (text) => {
	if (!text) return null;

	const lines = text.split('\n');
	const elements = [];
	let currentList = [];
	let listType = null;

	const flushList = () => {
		if (currentList.length > 0) {
			elements.push(
				listType === 'ul' ? (
					<ul key={`list-${elements.length}`} className="ai-advice__list">
						{currentList}
					</ul>
				) : (
					<ol key={`list-${elements.length}`} className="ai-advice__list--ordered">
						{currentList}
					</ol>
				)
			);
			currentList = [];
			listType = null;
		}
	};

	const parseInlineMarkdown = (line) => {
		// Парсинг ссылок [text](url)
		line = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, url) => {
			return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="ai-advice__link">${text}</a>`;
		});

		// Парсинг жирного текста **text**
		line = line.replace(/\*\*([^*]+)\*\*/g, '<strong class="ai-advice__bold">$1</strong>');

		// Парсинг курсива *text*
		line = line.replace(/\*([^*]+)\*/g, '<em class="ai-advice__italic">$1</em>');

		// Парсинг кода `code`
		line = line.replace(/`([^`]+)`/g, '<code class="ai-advice__code">$1</code>');

		return line;
	};

	lines.forEach((line, index) => {
		// Заголовки
		if (line.startsWith('# ')) {
			flushList();
			elements.push(
				<h1 key={`h1-${index}`} className="ai-advice__heading ai-advice__heading--1">
					{line.substring(2)}
				</h1>
			);
		} else if (line.startsWith('## ')) {
			flushList();
			elements.push(
				<h2 key={`h2-${index}`} className="ai-advice__heading ai-advice__heading--2">
					{line.substring(3)}
				</h2>
			);
		} else if (line.startsWith('### ')) {
			flushList();
			elements.push(
				<h3 key={`h3-${index}`} className="ai-advice__heading ai-advice__heading--3">
					{line.substring(4)}
				</h3>
			);
		}
		// Маркированный список
		else if (line.match(/^[-*]\s/)) {
			if (listType !== 'ul') {
				flushList();
				listType = 'ul';
			}
			const content = parseInlineMarkdown(line.substring(2));
			currentList.push(
				<li key={`li-${index}`} className="ai-advice__list-item" dangerouslySetInnerHTML={{ __html: content }} />
			);
		}
		// Нумерованный список
		else if (line.match(/^\d+\.\s/)) {
			if (listType !== 'ol') {
				flushList();
				listType = 'ol';
			}
			const content = parseInlineMarkdown(line.replace(/^\d+\.\s/, ''));
			currentList.push(
				<li key={`li-${index}`} className="ai-advice__list-item" dangerouslySetInnerHTML={{ __html: content }} />
			);
		}
		// Пустая строка
		else if (line.trim() === '') {
			flushList();
		}
		// Обычный текст
		else if (line.trim()) {
			flushList();
			const content = parseInlineMarkdown(line);
			elements.push(
				<p key={`p-${index}`} className="ai-advice__paragraph" dangerouslySetInnerHTML={{ __html: content }} />
			);
		}
	});

	flushList();
	return elements;
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

	const prePrompt = `Проанализируй результаты теста по ${ testName } и предоставь развернутую аналитику. 

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
		const preparedData = {
			prePrompt,
			stats,
			questions: testData,
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

			console.log('Отправляемый payload:', payload);

			const response = await fetch('https://rulser-proxyai.store/deepseek', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					model: "deepseek-coder",
					messages: [{
						role: 'user',
						content: `Проанализируй результаты теста: ${ JSON.stringify(payload) }`
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
						{error ? (
							<p className='ai-advice__text--error'>{error}</p>
						) : (
							parseMarkdown(advice)
						)}
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
