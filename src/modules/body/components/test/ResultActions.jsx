import React from 'react';

/**
 * Компонент действий с результатами теста
 */
const ResultActions = ({ onShowAnswers, onRetry }) => {
    return (
        <div className='result-actions'>
            <button className='btn btn-secondary' onClick={onShowAnswers}>
                📖 Посмотреть ответы
            </button>
            <button className='btn btn-primary' onClick={onRetry}>
                🔄 Пройти еще раз
            </button>
        </div>
    );
};

export default ResultActions;