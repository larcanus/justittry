import React from 'react';

/**
 * Компонент выбора уровня сложности теста
 *
 * @component
 * @param {Object} props - Свойства компонента
 * @param {string} props.value - Текущее значение сложности ('jun' или 'mid')
 * @param {Function} props.onChange - Обработчик изменения сложности
 */
const DifficultySelector = ({ value, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className='test-config__difficulty'>
            <form className='test-config__difficulty-form'>
                <div className='test-config__difficulty-list'>
                    <input
                        type='radio'
                        name='difficulty'
                        id='difficulty-jun'
                        value='jun'
                        className='test-config__difficulty-input'
                        checked={value === 'jun'}
                        onChange={handleChange}
                    />
                    <label
                        className='test-config__difficulty-label'
                        htmlFor='difficulty-jun'
                    >
                        Student
                    </label>

                    <input
                        type='radio'
                        name='difficulty'
                        id='difficulty-mid'
                        value='mid'
                        className='test-config__difficulty-input'
                        checked={value === 'mid'}
                        onChange={handleChange}
                    />
                    <label
                        className='test-config__difficulty-label'
                        htmlFor='difficulty-mid'
                    >
                        Developer
                    </label>
                </div>
            </form>
        </div>
    );
};

export default DifficultySelector;
