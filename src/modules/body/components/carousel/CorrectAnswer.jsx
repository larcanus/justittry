import React from 'react';

/**
 * Компонент отображения правильного ответа
 */
const CorrectAnswer = ({ slide, index, activeIndex, show }) => {
    if (!show) return null;

    const isActive = index === activeIndex;

    return (
        <li className={`correct-answer ${isActive ? 'correct-answer--active' : ''}`}>
            <div className='correct-answer__content'>
                <pre>
                    <code>{slide.answer}</code>
                </pre>
            </div>
        </li>
    );
};

export default CorrectAnswer;
