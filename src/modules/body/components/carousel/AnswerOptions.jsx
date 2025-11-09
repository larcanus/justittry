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

    const renderAnswerOption = (optionKey, optionValue) => {
        const textLengthModifier = getTextLengthClass(optionValue);
        const modifierClass = textLengthModifier ? `answer-option--${textLengthModifier}` : '';

        return (
            <label className={`answer-option ${modifierClass}`.trim()}>
                <input
                    className='answer-option__input'
                    id={`${index}${optionKey}`}
                    type='checkbox'
                    value={optionKey}
                />
                <span className='answer-option__text'>
                    {formatAnswerText(optionValue)}
                </span>
            </label>
        );
    };

    return (
        <li className={`slide-answers ${isActive ? 'slide-answers--active' : ''}`}>
            <section id={index}>
                <div className='answer-group'>
                    {renderAnswerOption('a1', slide.option.a1)}
                    {renderAnswerOption('a2', slide.option.a2)}
                </div>

                <div className='answer-group'>
                    {renderAnswerOption('a3', slide.option.a3)}
                    {renderAnswerOption('a4', slide.option.a4)}
                </div>
            </section>
        </li>
    );
};

export default AnswerOptions;
