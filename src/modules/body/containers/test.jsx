import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import style from '../styles/style.css';
import win from '../../../common/images/Congratulations.png';
import fail from '../../../common/images/failed.png';
import Carousel from '../components/carousel/Carousel';
import Share from '../components/share';
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

    const { elapsedTime, stopTimer, resetTimer } = useTestTimer(
        !testConfig.optionTest.timer, // isTimerEnabled (inverted logic from original)
        handleTimeUp
    );

    // аналог дидмаунта, грузим тимер при рендеринге
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
    }, []);

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
                            timerID={ timerID }
                            test={ testConfig.descTest }
                            cleanupTimer={ stopTimer }
                            elapsedTime={elapsedTime}
                            history={history}
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

const DivResult = (props) => {
    /**
     * Показать ответы
     */
    const showDivCarousel = (e) => {
        document.querySelector(`div[class='carousel-div']`).removeAttribute('hidden');
        document.querySelector(`div[class='carousel-result']`).setAttribute('hidden', 'true');

        // Устанавливаем флаг, что показываем ответы
        if (props.setShowingAnswers) {
            props.setShowingAnswers(true);
        }

        // Останавливаем таймер при просмотре ответов
        if (props.cleanupTimer) {
            props.cleanupTimer();
        }

        // Прокручиваем страницу вверх
        window.scrollTo(0, 0);
    }

    const {result, timerID, test, cleanupTimer, elapsedTime, history, setShowingAnswers} = props;
    const nameTest = test.substring(21);
    let diff = '';
    let countAnswerTrue = 0;
    let countAllQuestion = 0;
    let resultTestToShowDiv = null;

    // Cleanup timer when component mounts
    useEffect(() => {
        // очищаем события на скроллинг и на клавишы
        window.onscroll = null;
        window.onkeyup = null;

        //останавливаем таймер (legacy Redux timer)
        if (timerID?.timerID) {
            clearInterval(timerID.timerID);
        }

        // Сбрасываем флаг показа ответов
        if (setShowingAnswers) {
            setShowingAnswers(false);
        }
    }, []);

    if (result !== null) {
        for (let i in result.answers) {
            countAllQuestion += 1;
            if (result.answers[i]) {
                countAnswerTrue += 1;
            }
        }

        if (cleanupTimer) {
            cleanupTimer();
        }

        // проверяем допустимое количество ошибок
        switch (true) {
            case result.diffical.includes('jun') :
                diff = 'Student';
                resultTestToShowDiv = countAllQuestion - countAnswerTrue <= 5;
                break;
            case result.diffical.includes('mid') :
                diff = 'Developer';
                resultTestToShowDiv = countAllQuestion - countAnswerTrue <= 3;
                break;
            default :
                diff = 'Student';
                resultTestToShowDiv = countAllQuestion - countAnswerTrue <= 5;
                break;
        }

        const proportion = `${countAnswerTrue} / ${countAllQuestion}`;
        const percentage = Math.round((countAnswerTrue / countAllQuestion) * 100);

        if (resultTestToShowDiv) {
            return (
                <div className='divResult'>
                    <div className='result-header success'>
                        <img src={win} alt='Congratulations!' className='result-image'/>
                        <h2 className='result-title'>Поздравляем! 🎉</h2>
                    </div>

                    <div className='result-stats'>
                        <div className='stat-item'>
                            <span className='stat-label'>Тест:</span>
                            <span className='stat-value'>{nameTest}</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-label'>Сложность:</span>
                            <span className='stat-value'>{diff}</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-label'>Результат:</span>
                            <span className='stat-value highlight'>{proportion} ({percentage}%)</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-label'>Затраченное время:</span>
                            <span className='stat-value'>{elapsedTime}</span>
                        </div>
                    </div>

                    <div className='result-actions'>
                        <button className='btn btn-secondary' onClick={event => showDivCarousel(event)}>
                            📖 Посмотреть ответы
                        </button>
                        <button className='btn btn-primary' onClick={() => {
                            history.push('/');
                        }}>
                            🔄 Пройти еще раз
                        </button>
                    </div>

                    <div className='result-share'>
                        <p className='share-text'>Поделиться результатом:</p>
                        <Share testName={nameTest} result={`${percentage}%`} difficulty={diff}/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='divResult'>
                    <div className='result-header failed'>
                        <img src={fail} alt='Failed!' className='result-image'/>
                        <h2 className='result-title'>Попробуйте еще раз! 💪</h2>
                    </div>

                    <div className='result-stats'>
                        <div className='stat-item'>
                            <span className='stat-label'>Тест:</span>
                            <span className='stat-value'>{nameTest}</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-label'>Сложность:</span>
                            <span className='stat-value'>{diff}</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-label'>Результат:</span>
                            <span className='stat-value highlight'>{proportion} ({percentage}%)</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-label'>Затраченное время:</span>
                            <span className='stat-value'>{elapsedTime}</span>
                        </div>
                    </div>

                    <div className='result-actions'>
                        <button className='btn btn-secondary' onClick={event => showDivCarousel(event)}>
                            📖 Посмотреть ответы
                        </button>
                        <button className='btn btn-primary' onClick={() => {
                            history.push('/');
                        }}>
                            🔄 Пройти еще раз
                        </button>
                    </div>

                    <div className='result-share'>
                        <p className='share-text'>Поделиться тестом:</p>
                        <Share testName={nameTest} result={`${percentage}%`} difficulty={diff}/>
                    </div>
                </div>
            );
        }
    } else {
        return (
            <div className='loading-result'>
                <p>Загрузка результатов...</p>
            </div>
        );
    }
}
