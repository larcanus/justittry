import { useState, useCallback } from 'react';

/**
 * Хук для управления навигацией по карусели
 * @param {number} totalSlides - Общее количество слайдов
 * @returns {object} Состояние и методы навигации
 */
export const useCarouselNavigation = (totalSlides) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showFinishButton, setShowFinishButton] = useState(false);

    const goToSlide = useCallback((index) => {
        if (index >= 0 && index < totalSlides) {
            setActiveIndex(index);
            
            // Показываем кнопку "Закончить" на предпоследнем слайде
            if (index === totalSlides - 2) {
                setShowFinishButton(true);
            }
        }
    }, [totalSlides]);

    const goToPrevSlide = useCallback(() => {
        if (activeIndex > 0) {
            setActiveIndex(prev => prev - 1);
        }
    }, [activeIndex]);

    const goToNextSlide = useCallback(() => {
        if (activeIndex < totalSlides - 1) {
            setActiveIndex(prev => prev + 1);
            
            // Показываем кнопку на предпоследнем слайде
            if (activeIndex === totalSlides - 2) {
                setShowFinishButton(true);
            }
        }
    }, [activeIndex, totalSlides]);

    const isFirstSlide = activeIndex === 0;
    const isLastSlide = activeIndex === totalSlides - 1;

    return {
        activeIndex,
        showFinishButton,
        goToSlide,
        goToPrevSlide,
        goToNextSlide,
        isFirstSlide,
        isLastSlide,
    };
};