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

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const handleTouchStart = (e) => {
            const touch = e.touches[0];
            touchStartX.current = touch.clientX;
            touchStartY.current = touch.clientY;
            touchStartTime.current = Date.now();
        };

        const handleTouchEnd = (e) => {
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
        };

        const handleTouchMove = (e) => {
            if (!touchStartX.current || !touchStartY.current) return;

            const touch = e.touches[0];
            const deltaX = Math.abs(touch.clientX - touchStartX.current);
            const deltaY = Math.abs(touch.clientY - touchStartY.current);

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
