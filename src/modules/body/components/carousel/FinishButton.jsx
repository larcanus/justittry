import React from 'react';

/**
 * Кнопка завершения теста
 */
const FinishButton = ({ onClick, showingAnswers }) => {
    const buttonText = showingAnswers
        ? '📊 Вернуться к результатам'
        : 'Закончить тест!';

    const modifierClass = showingAnswers ? 'finish-button--results' : '';

    return (
        <button
            id='btnFinal'
            className={`finish-button ${modifierClass}`.trim()}
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
};

export default FinishButton;
