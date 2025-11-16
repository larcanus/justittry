export default function checkUserAgent() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return false;
    }
    return true;
}


/**
 * Парсит markdown-текст в React-элементы
 */
export const parseMarkdown = (text) => {
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

