import React, { useState, useEffect } from 'react';
import { useCarouselNavigation } from '../../hooks/useCarouselNavigation';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';
import { useAnswerValidation } from '../../hooks/useAnswerValidation';
import { useTestRedux } from '../../hooks/useTestRedux';
import useSwipe from '../../hooks/useSwipe';
import CarouselNavigation from './CarouselNavigation';
import QuestionSlide from './QuestionSlide';
import AnswerOptions from './AnswerOptions';
import CorrectAnswer from './CorrectAnswer';
import FinishButton from './FinishButton';
import '../../../../styles/prism.css'
import logger from '../../../../common/logger';

/**
 * Главный компонент карусели с вопросами теста
 */
const Carousel = ({ slides, testName, diff, showingAnswers, duration, finishTestRef }) => {
    const { completeTest } = useTestRedux();
    const [isTestCompleted, setIsTestCompleted] = useState(false);

    const {
        activeIndex,
        showFinishButton,
        goToSlide,
        goToPrevSlide,
        goToNextSlide,
    } = useCarouselNavigation(slides.length);

    const {
        showCorrectAnswers,
        validateAnswers,
    } = useAnswerValidation(slides, diff);

    const canNavigate = showingAnswers || !showCorrectAnswers;

    // Клавиатурная навигация
    useKeyboardNavigation(goToPrevSlide, goToNextSlide, canNavigate);

    // Свайп навигация для мобильных устройств
    const swipeRef = useSwipe(
        () => {
            if (activeIndex < slides.length - 1 && canNavigate) {
                goToNextSlide();
            }
        },
        () => {
            if (activeIndex > 0 && canNavigate) {
                goToPrevSlide();
            }
        }
    );

    /**
     * Обработчик завершения теста
     */
    const handleFinish = () => {
        // Если просматриваем ответы, возвращаемся к результатам
        if (showingAnswers) {
            const divCarousel = document.querySelector(`div[class='test__carousel']`);
            const divCarouselResult = document.querySelector(`div[class='test__result']`);

            divCarousel?.setAttribute('hidden', 'true');
            divCarouselResult?.removeAttribute('hidden');
            window.scrollTo(0, 0);
            return;
        }

        // Валидируем ответы
        const results = validateAnswers();

        // Меняем класс таймера
        setIsTestCompleted(true);

        // Формируем результат для Redux
        const result = {
            test: testName,
            diffical: diff,
            answers: results.answers,
            answerFullData: results.answerFullData,
        };

        // Используем thunk action для завершения теста
        completeTest(result, {
            onSuccess: () => {
                // Скрываем карусель, показываем результаты
                const divCarousel = document.querySelector(`div[class='test__carousel']`);
                const divCarouselResult = document.querySelector(`div[class='test__result']`);

                divCarousel?.setAttribute('hidden', 'true');
                divCarouselResult?.removeAttribute('hidden');
                window.scrollTo(0, 0);
            },
            onError: (error) => {
                logger.error('Failed to submit test:', error);
                alert('Произошла ошибка при отправке результатов');
            }
        });
    };

    // Привязываем функцию завершения к ref
    useEffect(() => {
        if (finishTestRef) {
            finishTestRef.current = handleFinish;
        }
    }, [finishTestRef, handleFinish]);

    return (
        <div className='carousel' id='carousel' ref={swipeRef}>
            {/* Навигация */}
            <CarouselNavigation
                totalSlides={slides.length}
                activeIndex={activeIndex}
                onPrev={goToPrevSlide}
                onNext={goToNextSlide}
                onGoToSlide={goToSlide}
            />

            {/* Таймер */}
            <p className={`timer ${isTestCompleted ? 'timer--completed' : ''}`} hidden={true}>
                <span id='timer'>{duration}</span>
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
                    testName={testName}
                />
            ))}

            {/* Кнопка завершения - показываем всегда когда showFinishButton true или просматриваем ответы */}
            {(showFinishButton || showingAnswers) && (
                <FinishButton
                    onClick={handleFinish}
                    showingAnswers={showingAnswers}
                />
            )}
        </div>
    );
};

export default Carousel;
