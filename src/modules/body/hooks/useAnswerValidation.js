import { useState, useCallback } from 'react';

/**
 * Хук для валидации ответов пользователя
 */
export const useAnswerValidation = (slides) => {
    const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
    const [validationResults, setValidationResults] = useState([]);

    /**
     * Валидация всех ответов
     */
    const validateAnswers = useCallback(() => {
        const results = {
            answers: [],
            correctCount: 0,
            incorrectCount: 0,
        };

        slides.forEach((slide, index) => {
            const userAnswers = [];
            const correctAnswers = slide.correct || [];

            // Собираем выбранные пользователем ответы
            ['a1', 'a2', 'a3', 'a4'].forEach((option) => {
                const checkbox = document.getElementById(`${index}${option}`);
                if (checkbox && checkbox.checked) {
                    userAnswers.push(option);
                }
            });

            // Проверяем правильность ответа
            const isCorrect =
                userAnswers.length === correctAnswers.length &&
                userAnswers.every((answer) => correctAnswers.includes(answer));

            results.answers.push({
                questionIndex: index,
                userAnswers,
                correctAnswers,
                isCorrect,
            });

            if (isCorrect) {
                results.correctCount++;
            } else {
                results.incorrectCount++;
            }
        });

        setValidationResults(results.answers);
        setShowCorrectAnswers(true);

        return results;
    }, [slides]);

    /**
     * Сброс валидации
     */
    const resetValidation = useCallback(() => {
        setShowCorrectAnswers(false);
        setValidationResults([]);
    }, []);

    return {
        showCorrectAnswers,
        validationResults,
        validateAnswers,
        resetValidation,
    };
};
