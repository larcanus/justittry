import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from '../styles/style.css';
import win from '../../../common/images/Congratulations.png';
import fail from '../../../common/images/failed.png';
import Carousel from './cara';
import Share from '../components/share';
import {startTestConfigTimer} from '../actions/startTest';


const Test = (props) => {
    const {testConfig, result, timerID, startTestConfigTimer} = props;
    const diffical = testConfig.optionTest.diffical;
    const questions = testConfig.optionTest.questions;

    const timerRun = () => {
        // если тест с таймером, убираем скрытие, ставим интервал
        if (!testConfig.optionTest.timer) {
            document.getElementsByClassName('timer')['0'].removeAttribute('hidden');

            const timer = setInterval(() => {
                let my_timer = document.getElementById('timer');
                let time = my_timer.innerHTML;
                let arr = time.split(':');
                let m = arr[0];
                let s = arr[1];

                if (Number(s) === 0) {
                    if (Number(m) === 0) {
                        clearInterval(timer);
                        document.getElementsByClassName('btnFinal')['0'].click();
                        return;
                    }
                    m--;
                    if (m < 10) m = `0${m}`;
                    s = 59;
                } else {
                    s--;
                }

                if (s < 10) {
                    s = `0${s}`;
                }
                document.getElementById('timer').innerHTML = `${m}:${s}`;

            }, 1000);

            startTestConfigTimer({
                timerID: timer,
            });
        }
    }

    // аналог дидмаунта, грузим тимер при рендеринге
    React.useEffect(() => {
        timerRun();
    }, []);

    // центруем сцену на середину теста в начале рендеринга
    window.scrollTo(0, 218);

    return (
        <div className='testDiv' style={style}>
            <div className='carousel-div'>
                <Carousel slides={questions} diff={diffical}/>
            </div>
            <div className='carousel-result' hidden={true}>
                <DivResult result={result} timerID={timerID} test={testConfig.nameTest}/>
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

    const {result, timerID, test} = props;
    const nameTest = test.substring(21);
    let diff = '';
    let countAnswerTrue = 0;
    let countAllQuestion = 0;
    let resultTestToShowDiv = null;

    if (result !== null) {
        // очищаем события на скроллинг и на клавишы
        window.onscroll = null;
        window.onkeyup = null;

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

        //останавливаем таймер
        clearInterval(timerID?.timerID);

        const proportion = `${countAnswerTrue} / ${countAllQuestion}`;

        if (resultTestToShowDiv) {
            return (
                <div className='divResult'>
                    <img src={win} alt='Congratulations!'/>
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
                    <img src={fail} alt='Failed!'/>
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