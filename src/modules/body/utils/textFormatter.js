import React from 'react';

/**
 * Определяет CSS-класс в зависимости от длины текста
 * @param {string} text - Текст для анализа
 * @returns {string} CSS класс
 */
export const getTextLengthClass = (text) => {
    if (!text) return '';
    const textLength = text.length;

    if (textLength > 200) return 'very-long-text';
    if (textLength > 80) return 'long-text';
    return '';
};

/**
 * Форматирует текст с переносами строк
 * @param {string} text - Текст для форматирования
 * @returns {React.Fragment[]} Массив элементов с <br/>
 */
export const formatAnswerText = (text) => {
    if (!text) return '';

    const lines = text.split('\n');
    return lines.map((line, index) => (
        <React.Fragment key={index}>
            {line}
            {index < lines.length - 1 && <br />}
        </React.Fragment>
    ));
};