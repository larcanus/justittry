import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import Carousel from '../components/carousel/Carousel';
import TestResult from '../components/test/TestResult';
import { useTestTimer } from '../hooks/useTestTimer';

import {
    getTestConfig,
    getTestResult,
    getTestQuestions,
    getTestDifficulty,
    getTestName,
    getTestDescription,
    isTimerEnabled,
    getTimerID
} from '../selectors/testSelectors';
import { TEST_DURATION } from "../../../common/constants";

const Test = ({
    testConfig,
    result,
    questions,
    difficulty,
    testName,
    testDescription,
    timerEnabled,
    timerID
}) => {
    const [showingAnswers, setShowingAnswers] = useState(false);

    // Ref для функции завершения теста
    const finishTestRef = useRef(null);

    // Проверяем debug режим и получаем кастомную длительность
    const isDebugMode = testConfig?.debug?.enabled || false;
    const debugDuration = testConfig?.debug?.duration || null;

    const handleTimeUp = () => {
        // Вызываем функцию завершения напрямую через ref
        if (finishTestRef.current) {
            finishTestRef.current();
        }
    };

    const { elapsedTime, isRunning, stopTimer, resetTimer } = useTestTimer(
        timerEnabled,
        handleTimeUp,
        debugDuration
    );

    useEffect(() => {
        if (result && isRunning) {
            stopTimer();
        }
    }, [result, isRunning, stopTimer]);

    useEffect(() => {
        const viewport = document.querySelector("meta[name=viewport]");
        if (viewport) {
            viewport.setAttribute(
                "content",
                "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            );
        }

        window.scrollTo(0, 0);

        // Debug info
        if (isDebugMode) {
            console.log('[Debug Test] Started with config:', {
                test: testName,
                difficulty,
                questionCount: questions.length,
                duration: debugDuration ? `${debugDuration} min` : 'default',
                timerEnabled,
            });
        }

        return () => {
            resetTimer();

            // Legacy cleanup
            if (timerID?.timerID) {
                clearInterval(timerID.timerID);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Intentionally run only on mount - test initialization

    if (!testConfig) {
        return null;
    }

    return (
        <div className='test'>
            {isDebugMode && (
                <div style={{
                    position: 'fixed',
                    top: 10,
                    right: 10,
                    background: '#ff6b6b',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    zIndex: 9999,
                }}>
                    DEBUG MODE
                </div>
            )}

            <div className='test__content'>
                <div className='test__wrapper'>
                    <div className='test__carousel'>
                        <Carousel
                            slides={questions}
                            diff={difficulty}
                            testName={testName}
                            descTest={testDescription}
                            showingAnswers={showingAnswers}
                            duration={isDebugMode ? debugDuration : TEST_DURATION}
                            finishTestRef={finishTestRef}
                        />
                    </div>
                    <div className='test__result' hidden={true}>
                        <TestResult
                            result={result}
                            testDescription={testDescription}
                            elapsedTime={elapsedTime}
                            onCleanupTimer={stopTimer}
                            onShowAnswers={() => {}}
                            setShowingAnswers={setShowingAnswers}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    testConfig: getTestConfig(state),
    result: getTestResult(state),
    questions: getTestQuestions(state),
    difficulty: getTestDifficulty(state),
    testName: getTestName(state),
    testDescription: getTestDescription(state),
    timerEnabled: isTimerEnabled(state),
    timerID: getTimerID(state),
});

export default connect(mapStateToProps)(Test);
