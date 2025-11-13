import React from 'react';

/**
 * Компонент действий с результатами теста - обновленный дизайн
 */
const ResultActions = ({ onShowAnswers, onRetry }) => {
    return (
        <div className='result-actions'>
            <div className='result-actions__container'>
                <button
                    className='result-actions__btn result-actions__btn--secondary'
                    onClick={onShowAnswers}
                >
                    <span className='result-actions__icon'>📖</span>
                    <span className='result-actions__text'>Посмотреть ответы</span>
                </button>
                <button
                    className='result-actions__btn result-actions__btn--primary'
                    onClick={onRetry}
                >
                    <span className='result-actions__icon'>🔄</span>
                    <span className='result-actions__text'>Пройти еще раз</span>
                </button>
            </div>
        </div>
    );
};

export default ResultActions;
