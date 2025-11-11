import { useRef, useEffect } from 'react';

/**
 * Хук для обработки свайпов на touch устройствах
 * @param {Function} onSwipeLeft - Callback при свайпе влево
 * @param {Function} onSwipeRight - Callback при свайпе вправо
 * @returns {Object} - Ref для элемента
 */
const useSwipe = (onSwipeLeft, onSwipeRight) => {
    const touchStartX = useRef(null);
    const touchStartY = useRef(null);
    const touchStartTime = useRef(null);
    const elementRef = useRef(null);
    const shouldIgnoreSwipe = useRef(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        /**
         * Проверяет, находится ли элемент внутри области с горизонтальным скроллом
         * @param {HTMLElement} target - Целевой элемент
         * @returns {boolean} - true если свайп нужно игнорировать
         */
        const isInsideScrollableArea = (target) => {
            const codeContent = target.closest('.carousel-slide__content');
            const correctAnswer = target.closest('.correct-answer__content');

            return !(!codeContent && !correctAnswer);
        };

        const handleTouchStart = (e) => {
            const touch = e.touches[0];
            const target = e.target;

            shouldIgnoreSwipe.current = isInsideScrollableArea(target);
            // Если свайп нужно игнорировать, не сохраняем начальные координаты
            if (shouldIgnoreSwipe.current) {
                touchStartX.current = null;
                touchStartY.current = null;
                touchStartTime.current = null;
                return;
            }

            touchStartX.current = touch.clientX;
            touchStartY.current = touch.clientY;
            touchStartTime.current = Date.now();
        };

        const handleTouchEnd = (e) => {
            if (shouldIgnoreSwipe.current) {
                shouldIgnoreSwipe.current = false;
                return;
            }

            if (!touchStartX.current || !touchStartY.current) return;

            const touch = e.changedTouches[0];
            const touchEndX = touch.clientX;
            const touchEndY = touch.clientY;
            const touchEndTime = Date.now();

            const deltaX = touchEndX - touchStartX.current;
            const deltaY = touchEndY - touchStartY.current;
            const deltaTime = touchEndTime - touchStartTime.current;

            // Проверяем, что свайп горизонтальный (не вертикальный скролл)
            const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);

            // Проверяем минимальную дистанцию (50px) и время (500ms)
            const isValidSwipe =
                Math.abs(deltaX) >= 50 &&
                deltaTime <= 500;

            if (isHorizontalSwipe && isValidSwipe) {
                if (deltaX > 0 && onSwipeRight) {
                    // Свайп вправо (показать предыдущий слайд)
                    onSwipeRight();
                } else if (deltaX < 0 && onSwipeLeft) {
                    // Свайп влево (показать следующий слайд)
                    onSwipeLeft();
                }
            }

            // Сброс значений
            touchStartX.current = null;
            touchStartY.current = null;
            touchStartTime.current = null;
            shouldIgnoreSwipe.current = false;
        };

        const handleTouchMove = (e) => {
            // Если свайп игнорируется, разрешаем стандартное поведение (горизонтальный скролл)
            if (shouldIgnoreSwipe.current) {
                return;
            }

            if (!touchStartX.current || !touchStartY.current) return;

            const touch = e.touches[0];
            const deltaX = Math.abs(touch.clientX - touchStartX.current);
            const deltaY = Math.abs(touch.clientY - touchStartY.current);

            // Предотвращаем скролл только если это горизонтальный свайп вне области с кодом
            if (deltaX > deltaY && deltaX > 10) {
                e.preventDefault();
            }
        };

        element.addEventListener('touchstart', handleTouchStart, { passive: true });
        element.addEventListener('touchend', handleTouchEnd, { passive: true });
        element.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            element.removeEventListener('touchstart', handleTouchStart);
            element.removeEventListener('touchend', handleTouchEnd);
            element.removeEventListener('touchmove', handleTouchMove);
        };
    }, [onSwipeLeft, onSwipeRight]);

    return elementRef;
};

export default useSwipe;
