import React from 'react';

/**
 * Компонент статистики результатов теста
 */
const ResultStats = ({ testName, difficulty, proportion, percentage, elapsedTime }) => {
    return (
        <div className='result-stats'>
            <div className='stat-item'>
                <span className='stat-label'>Тест:</span>
                <span className='stat-value'>{testName}</span>
            </div>
            <div className='stat-item'>
                <span className='stat-label'>Сложность:</span>
                <span className='stat-value'>{difficulty}</span>
            </div>
            <div className='stat-item'>
                <span className='stat-label'>Результат:</span>
                <span className='stat-value highlight'>{proportion} ({percentage}%)</span>
            </div>
            <div className='stat-item'>
                <span className='stat-label'>Затраченное время:</span>
                <span className='stat-value'>{elapsedTime}</span>
            </div>
        </div>
    );
};

export default ResultStats;