import React from 'react';
import arrL from '../../../../common/images/arrow.png';
import arrR from '../../../../common/images/arrow2.png';

/**
 * Стрелка влево
 */
const LeftArrow = ({ onClick, disabled }) => (
    <img
        className='carousel__arrow carousel__arrow--left'
        onClick={disabled ? undefined : onClick}
        src={arrL}
        alt='left'
        style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
    />
);

/**
 * Стрелка вправо
 */
const RightArrow = ({ onClick, disabled }) => (
    <img
        className='carousel__arrow carousel__arrow--right'
        onClick={disabled ? undefined : onClick}
        src={arrR}
        alt='right'
        style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
    />
);

/**
 * Индикатор слайда
 */
const Indicator = ({ index, activeIndex, onClick }) => (
    <li>
        <a
            className={`carousel__indicator ${index === activeIndex ? 'carousel__indicator--active' : ''}`}
            onClick={() => onClick(index)}
        />
    </li>
);

/**
 * Компонент навигации карусели
 */
const CarouselNavigation = ({
    totalSlides,
    activeIndex,
    onPrev,
    onNext,
    onGoToSlide
}) => {
    const isFirstSlide = activeIndex === 0;
    const isLastSlide = activeIndex === totalSlides - 1;

    return (
        <>
            {/* Индикаторы */}
            <ul className='carousel__indicators'>
                {Array.from({ length: totalSlides }, (_, index) => (
                    <Indicator
                        key={index}
                        index={index}
                        activeIndex={activeIndex}
                        onClick={onGoToSlide}
                    />
                ))}
            </ul>

            {/* Стрелки */}
            <LeftArrow onClick={onPrev} disabled={isFirstSlide} />
            <RightArrow onClick={onNext} disabled={isLastSlide} />
        </>
    );
};

export default CarouselNavigation;
