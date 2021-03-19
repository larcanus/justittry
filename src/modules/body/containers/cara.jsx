import React, {Component} from 'react';
import {connect} from 'react-redux';
import dispatchResult from '../../body/actions/actionResult';
import Prism from 'prismjs';
import '../../../prism.css';
import arrL from '../../../common/images/arrow.png';
import arrR from '../../../common/images/arrow2.png';


const CarouselLeftArrow = (props) => {

    const {activeIndex} = props;
    const btnLeftElem = document.getElementsByClassName('carousel__arrow carousel__arrow--left')['0'];

    if (btnLeftElem !== undefined) {
        if (btnLeftElem.hasAttribute('disabled')) {
            btnLeftElem.removeAttribute('disabled');
        }
        if (activeIndex === 0) {
            btnLeftElem.setAttribute('disabled', 'true');
        }
    }

    return (
        <img className='carousel__arrow carousel__arrow--left' onClick={props.onClick} src={arrL} alt='left'/>
    );
}

const CarouselRightArrow = (props) => {

    const {index, activeIndex} = props;
    const btnLeftElem = document.getElementsByClassName('carousel__arrow carousel__arrow--right')['0'];

    if (btnLeftElem !== undefined) {
        if (btnLeftElem.hasAttribute('disabled')) {
            btnLeftElem.removeAttribute('disabled');
        }

        if (index === activeIndex) {
            btnLeftElem.setAttribute('disabled', 'true');
        }
    }

    return (
        <img className='carousel__arrow carousel__arrow--right' onClick={props.onClick} src={arrR}
             alt='right'/>
    );
}

const CarouselIndicator = (props) => {
    return (
        <li>
            <a
                className={
                    props.index === props.activeIndex
                        ? 'carousel__indicator carousel__indicator--active'
                        : 'carousel__indicator'
                }
                onClick={props.onClick}
            />
        </li>
    );
}

class CarouselSlide extends Component {

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {

        return (
            <li
                className={
                    this.props.index === this.props.activeIndex
                        ? 'carousel__slide carousel__slide--active'
                        : 'carousel__slide'
                }
            >
                <div className='carousel-slide__content'>
                    <pre>
                        <code className='language-JavaScript'>
                        {this.props.slide.question}
                        </code>

                    </pre>
                </div>

            </li>
        );
    }
}

const CarouselAnswers = (props) => {

    return (
        <li
            className={
                props.index === props.activeIndex
                    ? 'carousel__slide_answers carousel__slide_answers--active'
                    : 'carousel__slide_answers'
            }
        >
            <section className='sectionAnswers' id={props.index}>
                <div className='divAnswer'>
                    <label className='labelAnswer'>
                        <input className='inputAnswer' id={props.index + 'a1'} type='checkbox' value='a1'/>
                        {props.slide.option.a1}
                    </label>
                    <label className='labelAnswer'>
                        <input className='inputAnswer' id={props.index + 'a2'} type='checkbox' value='a2'/>
                        {props.slide.option.a2}
                    </label>
                </div>

                <div className='divAnswer'>
                    <label className='labelAnswer'>
                        <input className='inputAnswer' id={props.index + 'a3'} type='checkbox' value='a3'/>
                        {props.slide.option.a3}
                    </label>
                    <label className='labelAnswer'>
                        <input className='inputAnswer' id={props.index + 'a4'} type='checkbox' value='a4'/>
                        {props.slide.option.a4}
                    </label>
                </div>
            </section>
        </li>
    );
}

const CarouselCorrectAnswer = (props) => {

    if (props.show) {
        return (
            <li
                className={
                    props.index === props.activeIndex
                        ? 'carousel__slide_cur_answer carousel__slide_cur_answer--active'
                        : 'carousel__slide_cur_answer'
                }
            >
                <div className='divAnswerFull'>
                        <pre>
                            <code>
                                {props.slide.answer}
                            </code>
                        </pre>
                </div>
            </li>
        )
    } else {
        return null
    }
}

// Carousel wrapper component
class Carousel extends Component {

    constructor(props) {
        super(props);

        this.goToSlide = this.goToSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);
        this.window = document.defaultView;
        this.state = {
            activeIndex: 0,
            correctAnswer: false,
            hiddenBtn: true,
        };
    }

    // componentDidUpdate() {
    //     // this.window.onkeydown = this.handle;
    //     this.handleBtnFinal()
    //     console.log( 'sdfsdfsdf')
    // }
    //
    // // TODO надо сделать переключение слайдов по кнопкам с клавы
    // handle(e) {
    //     if (e.code === 'KeyC') {
    //         Carousel.goToNextSlide()
    //     }
    // }

    /**
     * Метод открытия кнопки 'Закночить!'
     */
    handleBtnFinal() {
        let {slides} = this.props;
        let index = this.state.activeIndex;
        if (index === slides.length - 2) {
            this.setState({
                hiddenBtn: false
            });
        }
    }

    /**
     * Метод обновления текущего индекса
     * @param {Number} index - текущий индекс
     */
    goToSlide(index) {
        this.setState({
            activeIndex: index
        });
        this.handleBtnFinal();
    }


    /**
     * Обработчик клика назад
     * @param {event} e
     */
    goToPrevSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;

        if (index < 1) {
            return
        }

        --index;

        this.setState({
            activeIndex: index
        });
    }

    /**
     * Обработчик клика вперёд
     * @param {event} e
     */
    goToNextSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let {slides} = this.props;
        let slidesLength = slides.length - 1;
        this.handleBtnFinal()
        if (index === slidesLength) {
            return
        }

        ++index;

        this.setState({
            activeIndex: index
        });
    }

    /**
     * Обработчик кнопки 'Закончить тест'
     * @param {event} e
     */
    final(e) {
        e.preventDefault();

        const {slides, testName, dispatchResultTest, diff} = this.props;

        const result = {
            test: testName,
            diffical: diff,
            answers: {}
        };

        //меняем цвет у таймера
        document.getElementsByClassName('timer')['0'].style.color = '#4caf50';

        for (let i = 0; i < slides.length; i++) {
            const answerTrue = slides[i].answerOption;
            const answerSection = document.getElementById(`${i}`);
            const allInputs = answerSection.querySelectorAll(`input[type='checkbox']`);
            let resultInputs = '';


            /**
             * отключаем поля, проверяем их на checkable, меняем цвет label в зависимости от совпадения с верным ответом
             * заполняем resultInputs аннограммой результата проверки
             */
            allInputs.forEach(input => {
                input.setAttribute('disabled', 'disabled');

                if (input.checked) {
                    if (input.value === answerTrue) {
                        input.parentNode.style.setProperty('background-color', '#99e59b');
                        resultInputs += 't';
                    } else {
                        input.parentNode.style.setProperty('background-color', '#d26f6f');
                        resultInputs += 'f';
                    }
                } else {
                    resultInputs += 'n';
                }
            })


            /**
             * заполняем объект result резутатами вопроса (секции)
             */
            if (resultInputs.includes('nnnn')) {
                result.answers[i] = false;
                continue
            }
            result.answers[i] = !(resultInputs.includes('f'));

        }

        const divCarousel = document.querySelector(`div[class='carousel-div']`);
        const divCarouselResult = document.querySelector(`div[class='carousel-result']`);

        divCarousel.setAttribute('hidden', 'true');
        divCarouselResult.removeAttribute('hidden');
        e.target.setAttribute('hidden', 'true');

        this.state.correctAnswer = true;

        dispatchResultTest(result);
    }

    render() {
        return (
            <div className='carousel' id='carousel'>

                <ul className='carousel__indicators'>
                    {this.props.slides.map((slide, index) =>
                        <CarouselIndicator
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            isActive={this.state.activeIndex === index}
                            onClick={e => this.goToSlide(index)}
                        />
                    )}
                </ul>

                <p className='timer' hidden={true}><span id='timer'>20:00</span></p>
                <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} index={this.props.slides.length - 1}
                                   activeIndex={this.state.activeIndex}/>

                <ul className='carousel__slides'>
                    {this.props.slides.map((slide, index) =>
                        <CarouselSlide
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            slide={slide}
                        />
                    )}
                </ul>

                <CarouselRightArrow onClick={e => this.goToNextSlide(e)} index={this.props.slides.length - 1}
                                    activeIndex={this.state.activeIndex}/>

                {this.props.slides.map((slide, index) =>
                    <CarouselAnswers
                        key={index}
                        index={index}
                        activeIndex={this.state.activeIndex}
                        slide={slide}
                    />
                )}
                {this.props.slides.map((slide, index) =>
                    <CarouselCorrectAnswer
                        key={index}
                        index={index}
                        activeIndex={this.state.activeIndex}
                        slide={slide}
                        show={this.state.correctAnswer}
                    />
                )}

                <button id='btnFinal' className='btnFinal' hidden={this.state.hiddenBtn}
                        onClick={e => this.final(e)}>Закночить тест!
                </button>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        result: store.result
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchResultTest: (result) => {
            dispatch(dispatchResult(result));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
