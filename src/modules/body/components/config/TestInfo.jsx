import React from 'react';

/**
 * Информационный блок о тестировании
 * Отображает правила и условия прохождения теста
 *
 * @component
 */
const TestInfo = () => {
    return (
        <div className='test-config__info'>
            <div className='test-config__info-content'>
                <h3 className='test-config__info-title'>
                    Информация о тестировании
                </h3>

                <p className='test-config__info-text'>
                    Тесты предназначены для самостоятельной проверки знаний по различным языкам программирования и технологиям.
                </p>

                <p className='test-config__info-text'>
                    <strong>Выберите уровень сложности:</strong>
                </p>

                <ul className='test-config__info-list'>
                    <li className='test-config__info-item'>
                        <strong>Student</strong> - допускается до <strong>5 ошибок</strong>
                    </li>
                    <li className='test-config__info-item'>
                        <strong>Developer</strong> - допускается до <strong>3 ошибок</strong>
                    </li>
                </ul>

                <p className='test-config__info-text'>
                    <strong>Время выполнения:</strong> <strong>20 минут</strong>
                </p>

                <p className='test-config__info-text'>
                    Каждый тест содержит <strong>20 случайных вопросов</strong> из базы данных.
                </p>

                <p className='test-config__info-footer'>
                    Удачи в прохождении!
                </p>
            </div>
        </div>
    );
};

export default TestInfo;
