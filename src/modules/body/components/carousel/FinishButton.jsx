import React from 'react';

/**
 * Кнопка завершения теста
 */
const FinishButton = ({ onClick, showingAnswers, visible }) => {
    if (!visible) return null;

    const buttonText = showingAnswers 
        ? '📊 Вернуться к результатам' 
        : 'Закончить тест!';

    return (
        <button 
            id='btnFinal' 
            className='btnFinal'
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
};

export default FinishButton;