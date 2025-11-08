import React, { useEffect } from 'react';
import { getLanguageFromTest, highlightSyntax } from '../../utils/syntaxHighlighter';

/**
 * Компонент слайда с вопросом
 */
const QuestionSlide = ({ slide, index, activeIndex, testName }) => {
    const language = getLanguageFromTest(testName);
    const isActive = index === activeIndex;

    useEffect(() => {
        if (isActive) {
            highlightSyntax();
        }
    }, [isActive]);

    return (
        <li className={`carousel__slide ${isActive ? 'carousel__slide--active' : ''}`}>
            <div className='carousel-slide__content'>
                <pre>
                    <code className={`language-${language}`}>
                        {slide.question}
                    </code>
                </pre>
                <p className='p-number-question'>{slide.num}</p>
            </div>
        </li>
    );
};

export default QuestionSlide;