import React from 'react';
import { getTextLengthClass, formatAnswerText } from '../../utils/textFormatter';
import { useAnswerHeightSync } from '../../hooks/useAnswerHeightSync';

/**
 * Компонент вариантов ответов
 */
const AnswerOptions = ({ slide, index, activeIndex }) => {
    const isActive = index === activeIndex;
    
    // Синхронизируем высоту вариантов
    useAnswerHeightSync(activeIndex, index);

    const renderAnswerOption = (optionKey, optionValue) => (
        <label className={`labelAnswer ${getTextLengthClass(optionValue)}`}>
            <input 
                className='inputAnswer' 
                id={`${index}${optionKey}`} 
                type='checkbox' 
                value={optionKey}
            />
            <span className='answerText'>
                {formatAnswerText(optionValue)}
            </span>
        </label>
    );

    return (
        <li className={`carousel__slide_answers ${isActive ? 'carousel__slide_answers--active' : ''}`}>
            <section className='sectionAnswers' id={index}>
                <div className='divAnswer'>
                    {renderAnswerOption('a1', slide.option.a1)}
                    {renderAnswerOption('a2', slide.option.a2)}
                </div>

                <div className='divAnswer'>
                    {renderAnswerOption('a3', slide.option.a3)}
                    {renderAnswerOption('a4', slide.option.a4)}
                </div>
            </section>
        </li>
    );
};

export default AnswerOptions;