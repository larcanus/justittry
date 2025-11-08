import { useEffect } from 'react';

/**
 * Хук для синхронизации высоты вариантов ответов в одной строке
 * @param {number} activeIndex - Активный индекс слайда
 * @param {number} currentIndex - Текущий индекс компонента
 */
export const useAnswerHeightSync = (activeIndex, currentIndex) => {
    useEffect(() => {
        if (activeIndex !== currentIndex) return;

        const syncHeights = () => {
            const rows = document.querySelectorAll('.divAnswer');
            
            rows.forEach(row => {
                const labels = row.querySelectorAll('.labelAnswer');
                let maxHeight = 0;

                // Сбрасываем высоту для пересчета
                labels.forEach(label => {
                    label.style.minHeight = '';
                    const height = label.offsetHeight;
                    if (height > maxHeight) maxHeight = height;
                });

                // Устанавливаем максимальную высоту
                if (maxHeight > 0) {
                    labels.forEach(label => {
                        label.style.minHeight = `${maxHeight}px`;
                    });
                }
            });
        };

        // Даем время на рендеринг DOM
        const timeoutId = setTimeout(syncHeights, 50);

        // Обработчик изменения размера окна
        const handleResize = () => {
            setTimeout(syncHeights, 100);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', handleResize);
        };
    }, [activeIndex, currentIndex]);
};