import React from 'react';
import {connect} from 'react-redux';
import style from '../styles/style.css';
import {startTestConfig} from '../actions/startTest';
import Tests from '../../../store/qustions';
import {useHistory} from 'react-router-dom';

const Configtest = (props) => {
    const {test, choiceTestConfig, timerID} = props;
    const option = {};
    let history = useHistory();

    // останавливаем таймер если есть (например поднялись вверх по history)
    if (timerID !== null) {
        clearInterval(timerID?.timerID);
        console.log(timerID)
    }
    // очищаем событие на скроллинг
    window.onscroll = null;

    /**
     * Переключатель видимости предупрежнений
     * @param {boolean} hiddenBool - признак скрытия
     * @param {string} id - идентификатор элемента
     */
    const HandleAlarmMessage = (hiddenBool, id) => {
        const elem = document.getElementById(id);
        if (hiddenBool) {
            elem.setAttribute('hidden', 'true');
        } else {
            if (elem.hasAttribute('hidden')) {
                elem.removeAttribute('hidden');
            }
        }
    }

    /**
     * Проверяем выбор сложности и теста
     * @param {object} option - состояние корректности настроек
     * @param {object} checkDiff - коллекция с радио-инпутами слжности
     * @param {string} testName - имя теста
     * @return {string|null} checkedDiff - выбранная сложность
     */
    const checkConfig = (option, checkDiff, testName) => {
        let checkedDiff = null;
        for (let i = 0; i < checkDiff.length; i++) {
            if (checkDiff[i].checked) {
                HandleAlarmMessage(true, 'p-AlarmDif');

                option.validDif = true;
                checkedDiff = checkDiff[i].value;
                break
            } else {
                HandleAlarmMessage(false, 'p-AlarmDif');
                option.validDif = false;
            }
        }

        if (testName === 'Выберите тест') {
            HandleAlarmMessage(false, 'p-AlarmTest');
            option.validTest = false;
        } else {
            HandleAlarmMessage(true, 'p-AlarmTest');
            option.validTest = true;
        }
        return checkedDiff;
    }

    /**
     * Функция формирования масива с рандомными вопросами
     * @param {object} option - натройки теста
     * @return {array} questions - массив с вопросами
     */
    const generateRandomNums = (option) => {
        // проверяем все ли насройки верны
        if (!option.validTest || !option.validDif) {
            return
        }

        let testNameShort = test.testNow.substring(21);
        const doneTest = Tests[testNameShort][option.diffical];

        let numReserve = [];
        let questions = [];

        // генерим рандомные, неповторяющиеся 20 чисел
        while (numReserve.length < 20) {
            let randomNumber = Math.ceil(Math.random() * doneTest.length - 1);
            let found = false;

            for (let i = 0; i < numReserve.length; i++) {
                if (numReserve[i] === randomNumber) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                numReserve[numReserve.length] = randomNumber;
            }
        }
        // составляем массив с вопросами
        numReserve.forEach(num => {
            questions.push(doneTest[num]);
        });

        return questions;
    }

    /**
     * Функция формирования конфигурации теста
     * @param {object} e - объект события с кнопки 'начать'
     */
    const startTest = (e) => {
        const radioDiffList = document.querySelectorAll(`input[name='radio2']`);

        option.diffical = checkConfig(option, radioDiffList, test.testNow);
        option.timer = document.getElementById('without-timer').checked;
        // option.allDiff = document.getElementById('all-diff').checked;
        option.questions = generateRandomNums(option);

        // option.exclude = document.getElementById('exclude-questions').checked

        choiceTestConfig({
            nameTest: test.testNow,
            optionTest: option,
        });

        if (option.validDif && option.validTest) {
            history.push('/test');
            e.target.setAttribute('hidden', 'true');
        }
    }

    return (
        <div className='configTestDiv' style={style}>
            <div className='configDescTest'>
                <div className='descContent'>
                    <h3>Информация о тестировании</h3>
                    <p>
                        Тесты предназначены для самостоятельной проверки знаний JavaScript.
                    </p>
                    <p>
                        <strong>Выберите уровень сложности:</strong>
                    </p>
                    <ul>
                        <li><strong>Student</strong> - допускается до <strong>5 ошибок</strong></li>
                        <li><strong>Developer</strong> - допускается до <strong>3 ошибок</strong></li>
                    </ul>
                    <p>
                        <strong>Время выполнения:</strong> <strong>20 минут</strong>
                    </p>
                    <p>
                        Каждый тест содержит <strong>20 случайных вопросов</strong> из базы данных.
                    </p>
                    <p className='goodLuck'>
                        Удачи в прохождении!
                    </p>
                </div>
            </div>

            <div className='configRightPanel'>
                <div className='configTestSelect'>
                    <p><b>{test.testNow}.</b></p>
                </div>

                <div className='configDiffTest'>
                    <form className='form cf'>
                        <section className='plan cf'>
                            <input type='radio' name='radio2' id='jun' value='jun'/>
                            <label className='jun four col' htmlFor='jun'>Student</label>
                            <input type='radio' name='radio2' id='mid' value='mid'/>
                            <label className='mid four col' htmlFor='mid'>Developer</label>
                        </section>
                    </form>
                </div>

                <div className='configActions'>
                    <button className='startTest' onClick={e => startTest(e)}>Начать!</button>

                    <div className='configErrors'>
                        <p id='p-AlarmDif' hidden={true} style={{color: 'red', margin: '10px 0 0 0'}}>Выберите сложность!</p>
                        <p id='p-AlarmTest' hidden={true} style={{color: 'red', margin: '5px 0 0 0'}}>Выберите тест!</p>
                    </div>
                </div>

                <div className='configSubOptionTest'>
                    <form className='formCheckbox'>
                        <input type='checkbox' className='switch' id='without-timer'/>
                        <label htmlFor='without-timer'>Без таймера</label>
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (store) => {
    return {
        test: store.test,
        testConfig: store.testConfig.startTestConfig,
        timerID: store.testConfig.startTestConfigTimerID,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        choiceTestConfig: (testConfig) => {
            dispatch(startTestConfig(testConfig));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Configtest);
