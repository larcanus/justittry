import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import style from '../styles/style.css';
import win from '../../../common/images/Congratulations.png';
import fail from '../../../common/images/failed.png';
import Carousel from './cara';
import Share from '../components/share';
import {startTestConfigTimer} from '../actions/startTest';

const Test = (props) =>
{
    const { testConfig, result, timerID, startTestConfigTimer } = props;
    const diffical = testConfig.optionTest.diffical;
    const questions = testConfig.optionTest.questions;
    const timerRef = useRef(null);
    const [elapsedTime, setElapsedTime] = useState('20:00');

    const timerRun = () =>
    {
        // Clear any existing timer first
        if (timerRef.current)
        {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }

        // если тест с таймером, убираем скрытие, ставим интервал
        if (!testConfig.optionTest.timer)
        {
            const timerElement = document.getElementsByClassName('timer')['0'];
            if (timerElement)
            {
                timerElement.removeAttribute('hidden');
            }

            const startTime = Date.now();
            const timer = setInterval(() =>
            {
                let my_timer = document.getElementById('timer');
                if (!my_timer) return;

                let time = my_timer.innerHTML;
                let arr = time.split(':');
                let m = arr[0];
                let s = arr[1];

                if (Number(s) === 0)
                {
                    if (Number(m) === 0)
                    {
                        clearInterval(timer);
                        const finishButton = document.getElementsByClassName('btnFinal')['0'];
                        if (finishButton)
                        {
                            finishButton.click();
                        }
                        return;
                    }
                    m--;
                    if (m < 10) m = `0${ m }`;
                    s = 59;
                } else
                {
                    s--;
                }

                if (s < 10)
                {
                    s = `0${ s }`;
                }

                const currentTime = `${ m }:${ s }`;
                document.getElementById('timer').innerHTML = currentTime;

                // Сохраняем затраченное время
                const elapsedMinutes = 20 - parseInt(m);
                const elapsedSeconds = 60 - parseInt(s);

                setElapsedTime(`${elapsedMinutes}:${elapsedSeconds < 10 ? '0' + elapsedSeconds : elapsedSeconds}`);

            }, 1000);

            timerRef.current = timer;
            startTestConfigTimer({
                timerID: timer,
            });
        }
    }

    // Cleanup function
    const cleanupTimer = () =>
    {
        if (timerRef.current)
        {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        if (timerID?.timerID)
        {
            clearInterval(timerID.timerID);
        }

        // Reset timer display
        const timerElement = document.getElementById('timer');
        if (timerElement)
        {
            timerElement.innerHTML = '20:00';
        }

        // Hide timer
        const timerContainer = document.getElementsByClassName('timer')['0'];
        if (timerContainer)
        {
            timerContainer.setAttribute('hidden', 'true');
        }
    }

    // аналог дидмаунта, грузим тимер при рендеринге
    useEffect(() =>
    {
        timerRun();

        // Ensure proper viewport scaling for mobile
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
            cleanupTimer();
        };
    }, []);

    return (
        <div className='test-container'>
            <div className='test-content'>
                <div className='testDiv' style={ style }>
                    <div className='carousel-div'>
                        <Carousel slides={ questions } diff={ diffical } testName={ testConfig.nameTest } descTest={ testConfig.descTest }/>
                    </div>
                    <div className='carousel-result' hidden={ true }>
                        <DivResult result={ result } timerID={ timerID } test={ testConfig.descTest }
                                   cleanupTimer={ cleanupTimer } elapsedTime={elapsedTime}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        startTestConfigTimer: (timerID) => {
            dispatch(startTestConfigTimer(timerID));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);

const DivResult = (props) => {
    /**
     * Показать ответы
     */
    const showDivCarousel = (e) => {
        document.querySelector(`div[class='carousel-div']`).removeAttribute('hidden');
        e.target.setAttribute('hidden', 'true');

        // Останавливаем таймер при просмотре ответов
        if (props.cleanupTimer) {
            props.cleanupTimer();
        }
    }

    const {result, timerID, test, cleanupTimer, elapsedTime} = props;
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

        //останавливаем таймер
        if (timerID?.timerID) {
            clearInterval(timerID.timerID);
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
                            window.location.replace('https://justittry.ru/');
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
                            window.location.replace('https://justittry.ru/');
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
