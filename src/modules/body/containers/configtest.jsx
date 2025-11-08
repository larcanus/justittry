import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startTestConfig } from '../../../store/slices/testConfigSlice';
import { dispatchResetResult } from '../../../store/slices/resultSlice';
import { selectTestNow, selectTimerID } from '../../../store/selectors/testSelectors';
import { useTestConfiguration } from '../hooks/useTestConfiguration';
import Tests from '../../../store/qustions';
import TestInfo from '../components/config/TestInfo';
import DifficultySelector from '../components/config/DifficultySelector';
import TestOptions from '../components/config/TestOptions';
import ConfigActions from '../components/config/ConfigActions';
import style from '../styles/style.css';

/**
 * Компонент конфигурации теста
 */
const Configtest = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    // Используем мемоизированные селекторы
    const testNow = useSelector(selectTestNow);
    const timerID = useSelector(selectTimerID);

    const {
        difficulty,
        withoutTimer,
        validationErrors,
        handleDifficultyChange,
        handleTimerToggle,
        createTestConfig,
        resetConfiguration,
    } = useTestConfiguration(Tests, testNow);

    // Очистка при монтировании
    useEffect(() => {
        // Останавливаем таймер если есть
        if (timerID) {
            clearInterval(timerID);
        }

        // Очищаем событие на скроллинг
        window.onscroll = null;

        // Сбрасываем результаты
        dispatch(dispatchResetResult());

        return () => {
            resetConfiguration();
        };
    }, [timerID, dispatch, resetConfiguration]);

    /**
     * Обработчик начала теста
     */
    const handleStartTest = () => {
        const config = createTestConfig();

        if (!config) {
            return;
        }

        dispatch(startTestConfig(config));
        history.push('/test');
    };

    return (
        <div className='configTestDiv' style={style}>
            {/* Информационный блок */}
            <TestInfo />

            {/* Панель настроек */}
            <div className='configRightPanel'>
                {/* Название теста */}
                <div className='configTestSelect'>
                    <p>
                        <b>{testNow}.</b>
                    </p>
                </div>

                {/* Выбор сложности */}
                <DifficultySelector
                    value={difficulty}
                    onChange={handleDifficultyChange}
                />

                {/* Кнопка старта и ошибки */}
                <ConfigActions
                    onStart={handleStartTest}
                    validationErrors={validationErrors}
                />

                {/* Дополнительные опции */}
                <TestOptions
                    withoutTimer={withoutTimer}
                    onTimerToggle={handleTimerToggle}
                />
            </div>
        </div>
    );
};

export default Configtest;
