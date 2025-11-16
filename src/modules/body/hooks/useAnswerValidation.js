import { useState, useCallback } from 'react';
import { encodeAnswer, encodeSlide } from '../../../common/answerEncoder';

/**
 * Хук для валидации ответов теста
 * @param {Array} slides - Массив вопросов
 * @param {string} diff
 * @returns {object} Методы и состояние валидации
 */
export const useAnswerValidation = (slides, diff) => {
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
            answerFullData: [],
        };

        slides.forEach((slide, index) => {
            const answerTrue = slide.answerOption;
            const answerSection = document.getElementById(`${index}`);

            const slideData = {
                difficulty: diff === 'jun' ? 'easy' : 'middle',
                options: slide.option,
                question: slide.question,
                explanation: slide.answer,
                correct_answer: [encodeAnswer(slide.answerOption)],
                user_answers: [],
                status: 'skipped',
            };

            if (!answerSection) {
                results.answers[index] = false;
                // Кодируем слайд перед добавлением
                results.answerFullData.push(encodeSlide(slideData));
                return;
            }

            const allInputs = answerSection.querySelectorAll(`input[type='checkbox']`);
            let resultInputs = '';
            let hasAnswer = false;

            // Проверяем каждый input
            allInputs.forEach(input => {
                input.setAttribute('disabled', 'disabled');
                const inputValue = input.value; // 'a1', 'a2', 'a3', 'a4'

                if (input.checked) {
                    hasAnswer = true;
                    if (inputValue === answerTrue) {
                        input.parentNode.style.setProperty('background-color', '#99e59b');
                        resultInputs += 't';
                        slideData.status = 'correct';
                    } else {
                        input.parentNode.style.setProperty('background-color', '#d26f6f');
                        resultInputs += 'f';
                        slideData.status = 'incorrect';
                    }
                    // Добавляем ответ пользователя (пока в строковом формате)
                    slideData.user_answers.push(inputValue);
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

            // Кодируем слайд перед добавлением (преобразует options и user_answers)
            results.answerFullData.push(encodeSlide(slideData));
        });

        console.log('Valid results', results);
        setValidationResults(results);
        setShowCorrectAnswers(true);

        return results;
    }, [slides, diff]);

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
