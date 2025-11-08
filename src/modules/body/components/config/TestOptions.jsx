import React from 'react';

/**
 * Компонент дополнительных опций теста
 */
const TestOptions = ({ withoutTimer, onTimerToggle }) => {
    const handleChange = (e) => {
        onTimerToggle(e.target.checked);
    };

    return (
        <div className='configSubOptionTest'>
            <form className='formCheckbox'>
                <input
                    type='checkbox'
                    className='switch'
                    id='without-timer'
                    checked={withoutTimer}
                    onChange={handleChange}
                />
                <label htmlFor='without-timer'>Без таймера</label>
            </form>
        </div>
    );
};

export default TestOptions;