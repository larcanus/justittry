import React from 'react';

/**
 * Кнопка завершения теста
 *
 * @param {Object} props - Свойства компонента
 * @param {Function} props.onClick - Обработчик клика
 * @param {boolean} props.showingAnswers - Флаг отображения ответов
 */
const FinishButton = ({ onClick, showingAnswers }) => {
    const buttonText = showingAnswers
        ? '📊 Вернуться к результатам'
        : 'Закончить тест!';

    const modifierClass = showingAnswers ? 'finish-button__main--results' : '';

    return (
        <div className="finish-button">
            <div className="finish-button__container">
                <button
                    id="btnFinal"
                    className={`finish-button__main ${modifierClass}`.trim()}
                    onClick={onClick}
                    type="button"
                >
                    <span className="finish-button__text">
                        {buttonText}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default FinishButton;
