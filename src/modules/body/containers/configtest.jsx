import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startTestConfig } from '../actions/startTest';
import { dispatchResetResult } from '../actions/actionResult';
import { useTestConfiguration } from '../hooks/useTestConfiguration';
import { getCurrentTest, getTimerID } from '../selectors/testSelectors';
import Tests from '../../../store/qustions';
import TestInfo from '../components/config/TestInfo';
import DifficultySelector from '../components/config/DifficultySelector';
import TestOptions from '../components/config/TestOptions';
import ConfigActions from '../components/config/ConfigActions';
import style from '../styles/style.css';

/**
 * Компонент конфигурации теста
 */
const Configtest = ({
    currentTest,
    timerID,
    choiceTestConfig,
    dispatchResetResult
}) => {
    const history = useHistory();

    const {
        difficulty,
        withoutTimer,
        validationErrors,
        handleDifficultyChange,
        handleTimerToggle,
        createTestConfig,
        resetConfiguration,
    } = useTestConfiguration(Tests, currentTest);

    useEffect(() => {
        // Останавливаем таймер если есть (legacy)
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
            <TestInfo />

            <div className='configRightPanel'>
                <div className='configTestSelect'>
                    <p>
                        <b>{currentTest}.</b>
                    </p>
                </div>

                <DifficultySelector
                    value={difficulty}
                    onChange={handleDifficultyChange}
                />

                <ConfigActions
                    onStart={handleStartTest}
                    validationErrors={validationErrors}
                />

                <TestOptions
                    withoutTimer={withoutTimer}
                    onTimerToggle={handleTimerToggle}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentTest: getCurrentTest(state),
    timerID: getTimerID(state),
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
