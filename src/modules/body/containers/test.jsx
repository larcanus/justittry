import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from '../styles/style.css';
import Carousel from '../components/carousel/Carousel';
import TestResult from '../components/test/TestResult';
import { useTestTimer } from '../hooks/useTestTimer';
import {
    selectStartTestConfig,
    selectResultTest,
    selectTimerID,
    selectTestQuestions,
    selectTestDifficulty,
    selectTestName,
    selectTestDescription,
    selectIsTimerEnabled,
} from '../../../store/selectors/testSelectors';

const Test = () => {
    const testConfig = useSelector(selectStartTestConfig);
    const result = useSelector(selectResultTest);
    const timerID = useSelector(selectTimerID);
    const questions = useSelector(selectTestQuestions);
    const difficulty = useSelector(selectTestDifficulty);
    const testName = useSelector(selectTestName);
    const testDescription = useSelector(selectTestDescription);
    const isTimerEnabled = useSelector(selectIsTimerEnabled);

    const [showingAnswers, setShowingAnswers] = useState(false);

    const handleTimeUp = () => {
        const finishButton = document.getElementsByClassName('btnFinal')['0'];
        if (finishButton) {
            finishButton.click();
        }
    };

    const { elapsedTime, isRunning, stopTimer, resetTimer } = useTestTimer(
        isTimerEnabled,
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

            if (timerID) {
                clearInterval(timerID);
            }
        };
    }, [resetTimer, timerID]);

    // Логирование для отладки
    useEffect(() => {
        console.log('Test component state:', {
            hasResult: !!result,
            result,
            testName,
            difficulty,
            questionsCount: questions?.length
        });
    }, [result, testName, difficulty, questions]);

    return (
        <div className='test-container'>
            <div className='test-content'>
                <div className='testDiv' style={style}>
                    <div className='carousel-div'>
                        <Carousel
                            slides={questions}
                            diff={difficulty}
                            testName={testName}
                            showingAnswers={showingAnswers}
                        />
                    </div>
                    <div className='carousel-result' hidden={true}>
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

export default Test;
