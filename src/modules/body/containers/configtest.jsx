import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startTestConfig } from '../actions/startTest';
import { dispatchResetResult } from '../actions/actionResult';
import { useTestConfiguration } from '../hooks/useTestConfiguration';
import { getCurrentTest, getTimerID } from '../selectors/testSelectors';
import Tests from '../../../store/questions/questionsBandle';
import TestInfo from '../components/config/TestInfo';
import DifficultySelector from '../components/config/DifficultySelector';
import ConfigActions from '../components/config/ConfigActions';

/**
 * Компонент конфигурации теста
 * Отвечает за настройку параметров теста перед его началом
 *
 * @component
 * @param {Object} props - Свойства компонента
 * @param {string} props.currentTest - Название текущего теста
 * @param {Object} props.timerID - ID таймера (legacy)
 * @param {Function} props.choiceTestConfig - Функция для сохранения конфигурации теста
 * @param {Function} props.dispatchResetResult - Функция для сброса результатов
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
     * Создает конфигурацию и перенаправляет на страницу теста
     */
    const handleStartTest = () => {
        const config = createTestConfig();

        if (!config) {
            return;
        }

        choiceTestConfig(config);
        history.push('/test');
    };

    console.log('Configtest validationErrors:', validationErrors);

    return (
        <div className='test-config'>
            <TestInfo />

            <div className='test-config__panel'>
                <div className='test-config__header'>
                    <p className='test-config__header-title'>
                        <b>{currentTest}</b>
                    </p>
                </div>

                <DifficultySelector
                    value={difficulty}
                    onChange={handleDifficultyChange}
                />

                <ConfigActions
                    onStart={handleStartTest}
                    validationErrors={validationErrors}
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
