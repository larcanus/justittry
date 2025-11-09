import React, { useState, useMemo } from 'react';
import OptionsIcon from './OptionsIcon';
import OptionsDropdown from './OptionsDropdown';

/**
 * Компонент действий конфигурации теста
 * Содержит кнопку запуска теста с интегрированными опциями
 *
 * @component
 * @param {Object} props - Свойства компонента
 * @param {Function} props.onStart - Обработчик начала теста
 * @param {Object|Array<string>} props.validationErrors - Ошибки валидации (объект или массив)
 * @param {boolean} props.withoutTimer - Флаг отключения таймера
 * @param {Function} props.onTimerToggle - Обработчик переключения таймера
 */
const ConfigActions = ({
    onStart,
    validationErrors = {},
    withoutTimer,
    onTimerToggle
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    /**
     * Преобразуем ошибки в массив строк и проверяем их наличие
     */
    const errorMessages = useMemo(() => {
        // Если это массив - возвращаем как есть
        if (Array.isArray(validationErrors)) {
            return validationErrors;
        }

        // Если это объект - извлекаем значения
        if (validationErrors && typeof validationErrors === 'object') {
            return Object.values(validationErrors).filter(Boolean);
        }

        return [];
    }, [validationErrors]);

    const hasErrors = errorMessages.length > 0;

    /**
     * Обработчик открытия/закрытия выпадающего меню
     */
    const handleOptionsClick = (e) => {
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    /**
     * Обработчик закрытия выпадающего меню
     */
    const handleCloseDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className='test-config__actions'>
            <div className='test-config__button-wrapper'>
                <div className='test-config__button-container'>
                    <button
                        className='test-config__button test-config__button-text'
                        onClick={onStart}
                        disabled={hasErrors}
                        type='button'
                    >
                        Начать тест
                    </button>

                    <div className='test-config__button-divider' />

                    <button
                        className='test-config__button test-config__button-options'
                        onClick={handleOptionsClick}
                        disabled={hasErrors}
                        type='button'
                        aria-label='Опции теста'
                        aria-expanded={isDropdownOpen}
                    >
                        <OptionsIcon className='test-config__button-icon' />
                    </button>
                </div>

                <OptionsDropdown
                    isOpen={isDropdownOpen}
                    onClose={handleCloseDropdown}
                    withoutTimer={withoutTimer}
                    onTimerToggle={onTimerToggle}
                />
            </div>

            {/* Блок ошибок */}
            {hasErrors && (
                <div className='test-config__errors'>
                    {errorMessages.map((error, index) => (
                        <p key={index} className='test-config__error'>
                            {error}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ConfigActions;
