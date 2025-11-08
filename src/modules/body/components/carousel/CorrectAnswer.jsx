import React from 'react';

/**
 * Компонент отображения правильного ответа
 */
const CorrectAnswer = ({ slide, index, activeIndex, show }) => {
    if (!show) return null;

    const isActive = index === activeIndex;

    return (
        <li className={`carousel__slide_cur_answer ${isActive ? 'carousel__slide_cur_answer--active' : ''}`}>
            <div className='divAnswerFull'>
                <pre>
                    <code>{slide.answer}</code>
                </pre>
            </div>
        </li>
    );
};

export default CorrectAnswer;