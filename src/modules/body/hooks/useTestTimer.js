import { useRef, useEffect, useState, useCallback } from 'react';

/**
 * Хук для управления таймером теста
 * @param {boolean} isTimerEnabled - Включен ли таймер
 * @param {Function} onTimeUp - Callback при окончании времени
 * @returns {object} Состояние и методы таймера
 */
export const useTestTimer = (isTimerEnabled, onTimeUp) => {
    const timerRef = useRef(null);
    const startTimeRef = useRef(null);
    const [elapsedTime, setElapsedTime] = useState('00:00');
    const [isRunning, setIsRunning] = useState(false);

    /**
     * Форматирует время в MM:SS
     */
    const formatTime = useCallback((minutes, seconds) => {
        const m = minutes < 10 ? `0${minutes}` : minutes;
        const s = seconds < 10 ? `0${seconds}` : seconds;
        return `${m}:${s}`;
    }, []);

    /**
     * Запускает таймер
     */
    const startTimer = useCallback(() => {
        if (!isTimerEnabled || isRunning) return;

        // Показываем таймер
        const timerElement = document.getElementsByClassName('timer')[0];
        if (timerElement) {
            timerElement.removeAttribute('hidden');
        }

        startTimeRef.current = Date.now();
        setIsRunning(true);

        const timer = setInterval(() => {
            const timerDisplay = document.getElementById('timer');
            if (!timerDisplay) return;

            const time = timerDisplay.innerHTML;
            const [m, s] = time.split(':').map(Number);

            // Проверяем окончание времени
            if (s === 0 && m === 0) {
                clearInterval(timer);
                if (onTimeUp) onTimeUp();
                return;
            }

            // Уменьшаем время
            let newMinutes = m;
            let newSeconds = s - 1;

            if (newSeconds < 0) {
                newMinutes--;
                newSeconds = 59;
            }

            timerDisplay.innerHTML = formatTime(newMinutes, newSeconds);

            // Вычисляем затраченное время
            const currentTimeMs = Date.now();
            const elapsedMs = currentTimeMs - startTimeRef.current;
            const elapsedSeconds = Math.floor(elapsedMs / 1000);
            const elapsedMinutes = Math.floor(elapsedSeconds / 60);
            const remainingSeconds = elapsedSeconds % 60;

            setElapsedTime(formatTime(elapsedMinutes, remainingSeconds));
        }, 1000);

        timerRef.current = timer;
    }, [isTimerEnabled, isRunning, onTimeUp, formatTime]);

    /**
     * Останавливает таймер
     */
    const stopTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        setIsRunning(false);

        // Меняем цвет таймера на зеленый
        const timerElement = document.getElementsByClassName('timer')[0];
        if (timerElement) {
            timerElement.style.color = '#4caf50';
        }
    }, []);

    /**
     * Сбрасывает таймер
     */
    const resetTimer = useCallback(() => {
        stopTimer();

        const timerDisplay = document.getElementById('timer');
        if (timerDisplay) {
            timerDisplay.innerHTML = '20:00';
        }

        const timerContainer = document.getElementsByClassName('timer')[0];
        if (timerContainer) {
            timerContainer.setAttribute('hidden', 'true');
            timerContainer.style.color = '';
        }

        setElapsedTime('00:00');
        startTimeRef.current = null;
    }, [stopTimer]);

    // Автозапуск при монтировании
    useEffect(() => {
        startTimer();

        return () => {
            resetTimer();
        };
    }, []);

    return {
        elapsedTime,
        isRunning,
        startTimer,
        stopTimer,
        resetTimer,
    };
};