import React from 'react';
import { getLanguageFromTest } from "../../utils/syntaxHighlighter";

/**
 * Компонент отображения правильного ответа
 */
const CorrectAnswer = ({ slide, index, activeIndex, show, testName }) => {

    if (!show) return null;
    const language = getLanguageFromTest(testName);
    const isActive = index === activeIndex;

    return (
        <li className={`correct-answer ${isActive ? 'correct-answer--active' : ''}`}>
            <div className='correct-answer__content'>
                <pre className={`language-${language}`}>
                    <code className={`language-${language}`}>{slide.answer}</code>
                </pre>
            </div>
        </li>
    );
};

export default CorrectAnswer;
