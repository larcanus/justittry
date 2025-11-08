import { useState, useCallback } from 'react';

/**
 * Хук для валидации ответов теста
 * @param {Array} slides - Массив вопросов
 * @returns {object} Методы и состояние валидации
 */
export const useAnswerValidation = (slides) => {
    const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
    const [validationResults, setValidationResults] = useState(null);

    /**
     * Валидирует все ответы пользователя
     * @returns {object} Результаты валидации
     */
    const validateAnswers = useCallback(() => {
        const results = {
            answers: {},
            totalQuestions: slides.length,
            correctAnswers: 0,
        };

        slides.forEach((slide, index) => {
            const answerTrue = slide.answerOption;
            const answerSection = document.getElementById(`${index}`);
            
            if (!answerSection) {
                results.answers[index] = false;
                return;
            }

            const allInputs = answerSection.querySelectorAll(`input[type='checkbox']`);
            let resultInputs = '';
            let hasAnswer = false;

            // Проверяем каждый input
            allInputs.forEach(input => {
                input.setAttribute('disabled', 'disabled');

                if (input.checked) {
                    hasAnswer = true;
                    if (input.value === answerTrue) {
                        input.parentNode.style.setProperty('background-color', '#99e59b');
                        resultInputs += 't';
                    } else {
                        input.parentNode.style.setProperty('background-color', '#d26f6f');
                        resultInputs += 'f';
                    }
                } else {
                    resultInputs += 'n';
                }
            });

            // Если не выбран ни один ответ
            if (!hasAnswer) {
                results.answers[index] = false;
            } else {
                // Правильно, если нет неверных ответов
                const isCorrect = !resultInputs.includes('f');
                results.answers[index] = isCorrect;
                
                if (isCorrect) {
                    results.correctAnswers++;
                }
            }
        });

        setValidationResults(results);
        setShowCorrectAnswers(true);
        
        return results;
    }, [slides]);

    /**
     * Сбрасывает состояние валидации
     */
    const resetValidation = useCallback(() => {
        setShowCorrectAnswers(false);
        setValidationResults(null);
    }, []);

    return {
        showCorrectAnswers,
        validationResults,
        validateAnswers,
        resetValidation,
    };
};