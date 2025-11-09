import React from 'react';

/**
 * Компонент действий конфигурации
 * Отображает кнопку запуска теста и ошибки валидации
 *
 * @component
 * @param {Object} props - Свойства компонента
 * @param {Function} props.onStart - Обработчик начала теста
 * @param {Object} props.validationErrors - Объект с ошибками валидации
 * @param {boolean} props.validationErrors.difficulty - Ошибка выбора сложности
 * @param {boolean} props.validationErrors.test - Ошибка выбора теста
 */
const ConfigActions = ({ onStart, validationErrors }) => {
    const hasErrors = validationErrors.difficulty || validationErrors.test;

    return (
        <div className='test-config__actions'>
            <button
                className='test-config__button'
                onClick={onStart}
                type='button'
                disabled={hasErrors}
            >
                Начать тест
            </button>

            <div className='test-config__errors'>
                {validationErrors.difficulty && (
                    <p className='test-config__error'>
                        Выберите уровень сложности!
                    </p>
                )}
                {validationErrors.test && (
                    <p className='test-config__error'>
                        Выберите тест!
                    </p>
                )}
            </div>
        </div>
    );
};

export default ConfigActions;
