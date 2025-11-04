import React, {Component, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import style from '../styles/style.css';
import win from '../../../common/images/Congratulations.png';
import fail from '../../../common/images/failed.png';
import Carousel from './cara';
import Share from '../components/share';
import {startTestConfigTimer} from '../actions/startTest';

const Test = (props) =>
{
    console.log('propsprops',props)
    const { testConfig, result, timerID, startTestConfigTimer } = props;
    const diffical = testConfig.optionTest.diffical;
    const questions = testConfig.optionTest.questions;
    const timerRef = useRef(null);

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
                document.getElementById('timer').innerHTML = `${ m }:${ s }`;

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
                                   cleanupTimer={ cleanupTimer }/>
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
    }

    const {result, timerID, test, cleanupTimer} = props;
    const nameTest = test.substring(21);
    let diff = '';
    let countAnswerTrue = 0;
    let countAllQuestion = 0;
    let resultTestToShowDiv = null;

    // Cleanup timer when component mounts
    React.useEffect(() => {
        if (cleanupTimer) {
            cleanupTimer();
        }

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

        if (resultTestToShowDiv) {
            return (
                <div className='divResult'>
                    <img src={win} alt='Congratulations!' style={{maxWidth: '100%', height: 'auto'}}/>
                    <p><b>========Тест на знание {nameTest} успешно пройден!=========</b></p>
                    <p>Сложность: {diff}</p>
                    <p>Результат: {proportion}</p>
                    <button className='btnOpenAnswers' onClick={event => showDivCarousel(event)}>
                        Посмотреть ответы
                    </button>
                    <button className='btnNewTest' onClick={() => {
                        window.location.replace('https://justittry.ru/');
                    }}>
                        Попробывать еще раз
                    </button>
                </div>
            );
        } else {
            return (
                <div className='divResult'>
                    <img src={fail} alt='Failed!' style={{maxWidth: '100%', height: 'auto'}}/>
                    <br/>
                    <p><b>========Тест на знание {nameTest} не пройден.=========</b></p>
                    <p>Сложность: {diff}</p>
                    <p>Результат: {proportion}</p>
                    <button className='btnOpenAnswers' onClick={event => showDivCarousel(event)}>
                        Посмотреть ответы
                    </button>
                    <button className='btnNewTest' onClick={() => {
                        window.location.replace('https://justittry.ru/');
                    }}>
                        Попробывать еще раз
                    </button>

                    <Share/>
                    <div id='ya-share2' data-shape='round'
                         data-services='vkontakte,facebook,telegram,twitter,whatsapp,linkedin'/>
                </div>
            );
        }
    } else {
        return (
            <div/>
        );
    }
}
