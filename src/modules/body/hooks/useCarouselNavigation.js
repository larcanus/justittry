import { useState, useCallback, useEffect } from 'react';

/**
 * Хук для управления навигацией по карусели
 * @param {number} totalSlides - Общее количество слайдов
 * @returns {object} Состояние и методы навигации
 */
export const useCarouselNavigation = (totalSlides) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showFinishButton, setShowFinishButton] = useState(false);

   useEffect(() => {
        if (activeIndex >= totalSlides - 2 && totalSlides > 0) {
            setShowFinishButton(true);
        }
    }, [activeIndex, totalSlides]);

    const goToSlide = useCallback((index) => {
        if (index >= 0 && index < totalSlides) {
            setActiveIndex(index);
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
        setShowFinishButton,
    };
};
