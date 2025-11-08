import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startTestConfig } from '../actions/startTest';
import { dispatchResetResult } from '../actions/actionResult';
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
const Configtest = ({ test, timerID, choiceTestConfig, dispatchResetResult }) => {
    const history = useHistory();

    const {
        difficulty,
        withoutTimer,
        validationErrors,
        handleDifficultyChange,
        handleTimerToggle,
        createTestConfig,
        resetConfiguration,
    } = useTestConfiguration(Tests, test.testNow);

    // Очистка при монтировании
    useEffect(() => {
        // Останавливаем таймер если есть
        if (timerID?.timerID) {
            clearInterval(timerID.timerID);
        }

        // Очищаем событие на скроллинг
        window.onscroll = null;

        // Сбрасываем результаты
        dispatchResetResult();

        return () => {
            resetConfiguration();
        };
    }, [timerID, dispatchResetResult, resetConfiguration]);

    /**
     * Обработчик начала теста
     */
    const handleStartTest = () => {
        const config = createTestConfig();

        if (!config) {
            return;
        }

        choiceTestConfig(config);
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
                        <b>{test.testNow}.</b>
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

const mapStateToProps = (store) => ({
    test: store.test,
    testConfig: store.testConfig.startTestConfig,
    timerID: store.testConfig.startTestConfigTimerID,
});

const mapDispatchToProps = (dispatch) => ({
    choiceTestConfig: (testConfig) => {
        dispatch(startTestConfig(testConfig));
    },
    dispatchResetResult: () => {
        dispatch(dispatchResetResult());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Configtest);
