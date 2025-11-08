import React from 'react';

/**
 * Информационный блок о тестировании
 */
const TestInfo = () => {
    return (
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
                    <li>
                        <strong>Student</strong> - допускается до <strong>5 ошибок</strong>
                    </li>
                    <li>
                        <strong>Developer</strong> - допускается до <strong>3 ошибок</strong>
                    </li>
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
    );
};

export default TestInfo;