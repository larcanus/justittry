import React, { useRef, useEffect } from 'react';

/**
 * Компонент выпадающего меню с опциями теста
 * Отображает чекбокс для отключения таймера
 *
 * @component
 * @param {Object} props - Свойства компонента
 * @param {boolean} props.isOpen - Флаг открытия меню
 * @param {Function} props.onClose - Обработчик закрытия меню
 * @param {boolean} props.withoutTimer - Флаг отключения таймера
 * @param {Function} props.onTimerToggle - Обработчик переключения таймера
 */
const OptionsDropdown = ({ isOpen, onClose, withoutTimer, onTimerToggle }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    const handleChange = (e) => {
        onTimerToggle(e.target.checked);
    };

    if (!isOpen) return null;

    return (
        <div className='options-dropdown' ref={dropdownRef}>
            <div className='options-dropdown__content'>
                <div className='options-dropdown__item'>
                    <input
                        type='checkbox'
                        className='options-dropdown__checkbox'
                        id='without-timer-dropdown'
                        checked={withoutTimer}
                        onChange={handleChange}
                    />
                    <label
                        className='options-dropdown__label'
                        htmlFor='without-timer-dropdown'
                    >
                        Без таймера
                    </label>
                </div>
            </div>
        </div>
    );
};

export default OptionsDropdown;
