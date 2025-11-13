import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Share from '../share';
import ResultStats from './ResultStats';
import ResultActions from './ResultActions';
import {
    getDifficultyInfo,
    calculateTestResults,
    isTestPassed,
    extractTestName
} from '../../utils/testCalculations';
import win from '../../../../common/images/Congratulations.png';
import fail from '../../../../common/images/failed.png';

/**
 * Компонент отображения результатов теста
 */
const TestResult = ({
    result,
    testDescription,
    elapsedTime,
    onShowAnswers,
    onCleanupTimer,
    setShowingAnswers
}) => {
    const history = useHistory();

    useEffect(() => {
        // Очищаем события
        window.onscroll = null;
        window.onkeyup = null;

        // Сбрасываем флаг показа ответов
        if (setShowingAnswers) {
            setShowingAnswers(false);
        }
    }, [setShowingAnswers]);

    useEffect(() => {
        if (result && onCleanupTimer) {
            // Останавливаем таймер при получении результата
            onCleanupTimer();
        }
    }, [result, onCleanupTimer]);

    if (!result) {
        return (
            <div className='loading-result'>
                <p>Загрузка результатов...</p>
            </div>
        );
    }

    // Вычисляем результаты
    const testName = extractTestName(testDescription);
    const difficultyInfo = getDifficultyInfo(result.diffical);
    const stats = calculateTestResults(result.answers);
    const passed = isTestPassed(stats.errorCount, difficultyInfo.maxErrors);

    /**
     * Обработчик просмотра ответов
     */
    const handleShowAnswers = () => {
        if (onShowAnswers) {
            onShowAnswers();
        }

        const divCarousel = document.querySelector(`div[class='test__carousel']`);
        const divCarouselResult = document.querySelector(`div[class='test__result']`);

        divCarousel?.removeAttribute('hidden');
        divCarouselResult?.setAttribute('hidden', 'true');

        if (setShowingAnswers) {
            setShowingAnswers(true);
        }

        if (onCleanupTimer) {
            onCleanupTimer();
        }

        window.scrollTo(0, 0);
    };

    /**
     * Обработчик повторного прохождения
     */
    const handleRetry = () => {
        history.push('/');
    };

    return (
        <div className={`divResult ${passed ? 'win' : 'fail'}`}>
            <div className='result-header'>
                <div className='result-image-container'>
                    <img
                        src={passed ? win : fail}
                        alt={passed ? 'Congratulations!' : 'Failed!'}
                        className='result-image'
                    />
                </div>
                <h3 className='result-subtitle'>
                    {passed ? 'Тест успешно пройден!' : 'Тест не пройден'}
                </h3>
            </div>

            {/* Статистика */}
            <ResultStats
                testName={testName}
                difficulty={difficultyInfo.level}
                proportion={stats.proportion}
                percentage={stats.percentage}
                elapsedTime={elapsedTime}
            />

            {/* Действия */}
            <ResultActions
                onShowAnswers={handleShowAnswers}
                onRetry={handleRetry}
            />

            {/* Шаринг */}
            <div className='result-share'>
                <p className='share-text'>
                    {passed ? 'Поделиться результатом:' : 'Поделиться тестом:'}
                </p>
                <Share
                    testName={testName}
                    result={`${stats.percentage}%`}
                    difficulty={difficultyInfo.level}
                />
            </div>
        </div>
    );
};

export default TestResult;
