import React from 'react';

/**
 * Компонент действий конфигурации
 */
const ConfigActions = ({ onStart, validationErrors }) => {
    return (
        <div className='configActions'>
            <button className='startTest' onClick={onStart}>
                Начать!
            </button>

            <div className='configErrors'>
                {validationErrors.difficulty && (
                    <p style={{ color: 'red', margin: '10px 0 0 0' }}>
                        Выберите сложность!
                    </p>
                )}
                {validationErrors.test && (
                    <p style={{ color: 'red', margin: '5px 0 0 0' }}>
                        Выберите тест!
                    </p>
                )}
            </div>
        </div>
    );
};

export default ConfigActions;