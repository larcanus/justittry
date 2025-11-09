import React from 'react';

/**
 * Компонент дополнительных опций теста
 * Позволяет включить/выключить таймер
 *
 * @component
 * @param {Object} props - Свойства компонента
 * @param {boolean} props.withoutTimer - Флаг отключения таймера
 * @param {Function} props.onTimerToggle - Обработчик переключения таймера
 */
const TestOptions = ({ withoutTimer, onTimerToggle }) => {
    const handleChange = (e) => {
        onTimerToggle(e.target.checked);
    };

    return (
        <div className='test-config__options'>
            <div className='test-config__option'>
                <form className='test-config__option-form'>
                    <input
                        type='checkbox'
                        className='test-config__checkbox'
                        id='without-timer'
                        checked={withoutTimer}
                        onChange={handleChange}
                    />
                    <label
                        className='test-config__checkbox-label'
                        htmlFor='without-timer'
                    >
                        Без таймера
                    </label>
                </form>
            </div>
        </div>
    );
};

export default TestOptions;
