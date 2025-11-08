import React from 'react';

/**
 * Компонент выбора уровня сложности
 */
const DifficultySelector = ({ value, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className='configDiffTest'>
            <form className='form cf'>
                <section className='plan cf'>
                    <input
                        type='radio'
                        name='radio2'
                        id='jun'
                        value='jun'
                        checked={value === 'jun'}
                        onChange={handleChange}
                    />
                    <label className='jun four col' htmlFor='jun'>
                        Student
                    </label>

                    <input
                        type='radio'
                        name='radio2'
                        id='mid'
                        value='mid'
                        checked={value === 'mid'}
                        onChange={handleChange}
                    />
                    <label className='mid four col' htmlFor='mid'>
                        Developer
                    </label>
                </section>
            </form>
        </div>
    );
};

export default DifficultySelector;