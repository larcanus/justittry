import { useEffect } from 'react';

/**
 * Хук для обработки клавиатурной навигации
 * @param {Function} onPrev - Callback для перехода назад
 * @param {Function} onNext - Callback для перехода вперед
 * @param {boolean} enabled - Включена ли навигация
 */
export const useKeyboardNavigation = (onPrev, onNext, enabled = true) => {
    useEffect(() => {
        if (!enabled) return;

        const handleKeyPress = (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                case 'a':
                case 'ф': // Русская 'а'
                    onPrev();
                    break;
                case 'ArrowRight':
                case 'd':
                case 'в': // Русская 'д'
                    onNext();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keyup', handleKeyPress);
        
        return () => {
            window.removeEventListener('keyup', handleKeyPress);
        };
    }, [onPrev, onNext, enabled]);
};