import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import dispatchResult from '../../actions/actionResult';
import { useCarouselNavigation } from '../../hooks/useCarouselNavigation';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';
import { useAnswerValidation } from '../../hooks/useAnswerValidation';
import CarouselNavigation from './CarouselNavigation';
import QuestionSlide from './QuestionSlide';
import AnswerOptions from './AnswerOptions';
import CorrectAnswer from './CorrectAnswer';
import FinishButton from './FinishButton';
import '../../../../prism.css';

/**
 * Главный компонент карусели с вопросами теста
 */
const Carousel = ({ slides, testName, diff, showingAnswers, dispatchResultTest }) => {
    const {
        activeIndex,
        showFinishButton,
        goToSlide,
        goToPrevSlide,
        goToNextSlide,
    } = useCarouselNavigation(slides.length);

    const {
        showCorrectAnswers,
        validationResults,
        validateAnswers,
    } = useAnswerValidation(slides);

    // Клавиатурная навигация
    useKeyboardNavigation(goToPrevSlide, goToNextSlide, !showCorrectAnswers);

    // Автоскролл к карусели
    useEffect(() => {
        let timeout = false;

        const handleScroll = () => {
            if (timeout !== false) {
                clearTimeout(timeout);
            }

            timeout = setTimeout(() => {
                const anchor = document.getElementById('carousel');
                if (anchor) {
                    anchor.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 2300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /**
     * Обработчик завершения теста
     */
    const handleFinish = () => {
        // Если просматриваем ответы, возвращаемся к результатам
        if (showingAnswers) {
            const divCarousel = document.querySelector(`div[class='carousel-div']`);
            const divCarouselResult = document.querySelector(`div[class='carousel-result']`);

            divCarousel?.setAttribute('hidden', 'true');
            divCarouselResult?.removeAttribute('hidden');
            window.scrollTo(0, 0);
            return;
        }

        // Валидируем ответы
        const results = validateAnswers();

        // Меняем цвет таймера
        const timerElement = document.getElementsByClassName('timer')[0];
        if (timerElement) {
            timerElement.style.color = '#4caf50';
        }

        // Формируем результат для Redux
        const result = {
            test: testName,
            diffical: diff,
            answers: results.answers,
        };

        // Скрываем карусель, показываем результаты
        const divCarousel = document.querySelector(`div[class='carousel-div']`);
        const divCarouselResult = document.querySelector(`div[class='carousel-result']`);

        divCarousel?.setAttribute('hidden', 'true');
        divCarouselResult?.removeAttribute('hidden');

        dispatchResultTest(result);
    };

    return (
        <div className='carousel' id='carousel'>
            {/* Навигация */}
            <CarouselNavigation
                totalSlides={slides.length}
                activeIndex={activeIndex}
                onPrev={goToPrevSlide}
                onNext={goToNextSlide}
                onGoToSlide={goToSlide}
            />

            {/* Таймер */}
            <p className='timer' hidden={true}>
                <span id='timer'>20:00</span>
            </p>

            {/* Слайды с вопросами */}
            <ul className='carousel__slides'>
                {slides.map((slide, index) => (
                    <QuestionSlide
                        key={index}
                        slide={slide}
                        index={index}
                        activeIndex={activeIndex}
                        testName={testName}
                    />
                ))}
            </ul>

            {/* Варианты ответов */}
            {slides.map((slide, index) => (
                <AnswerOptions
                    key={`answer-${index}`}
                    slide={slide}
                    index={index}
                    activeIndex={activeIndex}
                />
            ))}

            {/* Правильные ответы */}
            {slides.map((slide, index) => (
                <CorrectAnswer
                    key={`correct-${index}`}
                    slide={slide}
                    index={index}
                    activeIndex={activeIndex}
                    show={showCorrectAnswers}
                />
            ))}

            {/* Кнопка завершения */}
            <FinishButton
                onClick={handleFinish}
                showingAnswers={showingAnswers}
                visible={showFinishButton}
            />
        </div>
    );
};

const mapStateToProps = (store) => ({
    result: store.result
});

const mapDispatchToProps = (dispatch) => ({
    dispatchResultTest: (result) => {
        dispatch(dispatchResult(result));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
