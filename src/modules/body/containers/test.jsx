import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import style from '../styles/style.css';
import Carousel from '../components/carousel/Carousel';
import { useHistory } from "react-router-dom";
import TestResult from '../components/test/TestResult';
import { useTestTimer } from '../hooks/useTestTimer';

const Test = (props) =>
{
    const { testConfig, result, timerID } = props;
    const diffical = testConfig.optionTest.diffical;
    const questions = testConfig.optionTest.questions;
    const [showingAnswers, setShowingAnswers] = useState(false);
    const history = useHistory();

    const handleTimeUp = () => {
        const finishButton = document.getElementsByClassName('btnFinal')['0'];
        if (finishButton) {
            finishButton.click();
        }
    };

    const { elapsedTime, isRunning, stopTimer, resetTimer } = useTestTimer(
        !testConfig.optionTest.timer, // isTimerEnabled (inverted logic from original)
        handleTimeUp
    );

    useEffect(() => {
        if (result && isRunning) {
            stopTimer();
        }
    }, [result, isRunning, stopTimer]);

    useEffect(() =>
    {
        const viewport = document.querySelector("meta[name=viewport]");
        if (viewport)
        {
            viewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
        }

        // Scroll to top when test starts
        window.scrollTo(0, 0);

        // Cleanup on unmount
        return () =>
        {
            resetTimer();

            // Clear Redux timer ID if exists (legacy cleanup)
            if (timerID?.timerID)
            {
                clearInterval(timerID.timerID);
            }
        };
    }, [resetTimer, timerID]);

    return (
        <div className='test-container'>
            <div className='test-content'>
                <div className='testDiv' style={ style }>
                    <div className='carousel-div'>
                        <Carousel slides={ questions } diff={ diffical } testName={ testConfig.nameTest } descTest={ testConfig.descTest } showingAnswers={showingAnswers}/>
                    </div>
                    <div className='carousel-result' hidden={ true }>
                        <TestResult
                            result={ result }
                            testDescription={ testConfig.descTest }
                            elapsedTime={elapsedTime}
                            onCleanupTimer={ stopTimer }
                            onShowAnswers={() => {}}
                            setShowingAnswers={setShowingAnswers}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (store) => {
    return {
        testConfig: store.testConfig.startTestConfig,
        test: store.test,
        result: store.result.resultTest,
        timerID: store.testConfig.startTestConfigTimerID,
    }
};

export default connect(mapStateToProps)(Test);
