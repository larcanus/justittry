import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
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
    const history = useHistory();

    const handleTimeUp = () => {
        const finishButton = document.getElementById('btnFinal')['0'];

        if (finishButton) {
            finishButton.click();
        }
    };

    const { elapsedTime, isRunning, stopTimer, resetTimer } = useTestTimer(
        timerEnabled,
        handleTimeUp
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

        return () => {
            resetTimer();

            // Legacy cleanup
            if (timerID?.timerID) {
                clearInterval(timerID.timerID);
            }
        };
    }, [resetTimer, timerID]);

    if (!testConfig) {
        return null;
    }

    return (
        <div className='test'>
            <div className='test__content'>
                <div className='test__wrapper'>
                    <div className='test__carousel'>
                        <Carousel
                            slides={questions}
                            diff={difficulty}
                            testName={testName}
                            descTest={testDescription}
                            showingAnswers={showingAnswers}
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
    timerID: getTimerID(state), // Legacy
});

export default connect(mapStateToProps)(Test);
