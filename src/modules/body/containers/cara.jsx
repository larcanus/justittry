import React, {Component, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import dispatchResult from '../actions/actionResult';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-dart';
import '../../../prism.css';
import arrL from '../../../common/images/arrow.png';
import arrR from '../../../common/images/arrow2.png';

const TEST_LANGUAGE_MAP = {
	'JavaScript': 'javascript',
	'HTML': 'javascript',
	'DART': 'dart',
	'PHP': 'php',
};

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
		try {
			Prism.highlightAll();
		} catch (error) {
			console.warn('Prism highlighting error:', error);
			// Продолжаем работу без подсветки
		}
    }

	componentDidUpdate() {
		try {
			Prism.highlightAll();
		} catch (error) {
			console.warn('Prism highlighting error:', error);
			// Продолжаем работу без подсветки
		}
	}

	getLanguageFromTest = () => {
		const { testName } = this.props;

		if (!testName) return 'javascript'; // fallback

		for (const [testKey, language] of Object.entries(TEST_LANGUAGE_MAP)) {
			if (testName.includes(testKey)) {
				return language;
			}
		}

		return 'javascript';
	}

	render() {
		const language = this.getLanguageFromTest();

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
                        <code className={`language-${language}`}>
                            {this.props.slide.question}
                        </code>
                    </pre>
					<p className='p-number-question'>{this.props.slide.num}</p>
				</div>
			</li>
		);
	}
}

const CarouselAnswers = (props) => {
	const answerRefs = useRef([]);
	const rowRefs = useRef([]);

	// Функция для определения класса в зависимости от длины текста
	const getTextLengthClass = (text) => {
		if (!text) return '';
		const textLength = text.length;

		// Для очень длинного текста
		if (textLength > 200) return 'very-long-text';
		// Для длинного текста
		if (textLength > 80) return 'long-text';
		// Для короткого текста (не используем single-line, чтобы не обрезать)
		return '';
	};

	// Функция для форматирования текста с переносами строк
	const formatAnswerText = (text) => {
		if (!text) return '';

		// Разбиваем текст по \n и создаем массив элементов
		const lines = text.split('\n');
		return lines.map((line, index) => (
			<React.Fragment key={index}>
				{line}
				{index < lines.length - 1 && <br />}
			</React.Fragment>
		));
	};

	// Эффект для выравнивания высоты вариантов в одной строке
	useEffect(() => {
		if (props.index === props.activeIndex) {
			// Даем время на рендеринг DOM
			setTimeout(() => {
				// Выравниваем высоту вариантов в каждой строке
				const rows = document.querySelectorAll('.divAnswer');
				rows.forEach((row, rowIndex) => {
					const labels = row.querySelectorAll('.labelAnswer');
					let maxHeight = 0;

					// Находим максимальную высоту в строке
					labels.forEach(label => {
						// Сбрасываем высоту для пересчета
						label.style.minHeight = '';
						const height = label.offsetHeight;
						if (height > maxHeight) maxHeight = height;
					});

					// Устанавливаем максимальную высоту для всех элементов в строке
					if (maxHeight > 0) {
						labels.forEach(label => {
							label.style.minHeight = `${maxHeight}px`;
						});
					}
				});
			}, 50);
		}
	}, [props.activeIndex, props.index]);

	return (
		<li
			className={
				props.index === props.activeIndex
					? 'carousel__slide_answers carousel__slide_answers--active'
					: 'carousel__slide_answers'
			}
		>
			<section className='sectionAnswers' id={props.index}>
				<div className='divAnswer' ref={el => rowRefs.current[0] = el}>
					<label
						className={`labelAnswer ${getTextLengthClass(props.slide.option.a1)}`}
						ref={el => answerRefs.current[0] = el}
					>
						<input className='inputAnswer' id={props.index + 'a1'} type='checkbox' value='a1'/>
						<span className='answerText'>{formatAnswerText(props.slide.option.a1)}</span>
					</label>
					<label
						className={`labelAnswer ${getTextLengthClass(props.slide.option.a2)}`}
						ref={el => answerRefs.current[1] = el}
					>
						<input className='inputAnswer' id={props.index + 'a2'} type='checkbox' value='a2'/>
						<span className='answerText'>{formatAnswerText(props.slide.option.a2)}</span>
					</label>
				</div>

				<div className='divAnswer' ref={el => rowRefs.current[1] = el}>
					<label
						className={`labelAnswer ${getTextLengthClass(props.slide.option.a3)}`}
						ref={el => answerRefs.current[2] = el}
					>
						<input className='inputAnswer' id={props.index + 'a3'} type='checkbox' value='a3'/>
						<span className='answerText'>{formatAnswerText(props.slide.option.a3)}</span>
					</label>
					<label
						className={`labelAnswer ${getTextLengthClass(props.slide.option.a4)}`}
						ref={el => answerRefs.current[3] = el}
					>
						<input className='inputAnswer' id={props.index + 'a4'} type='checkbox' value='a4'/>
						<span className='answerText'>{formatAnswerText(props.slide.option.a4)}</span>
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
        this.addListeners();
    }

    /**
     * Метод добавления наблюдателей
     */
    addListeners() {
        window.onkeyup = (e) => {
            switch (e.key) {
                case 'ArrowLeft' :
                    this.goToPrevSlide(e);
                    break;
                case 'ArrowRight' :
                    this.goToNextSlide(e);
                    break;
                case 'a' :
                    this.goToPrevSlide(e);
                    break;
                case 'd' :
                    this.goToNextSlide(e);
                    break;
                case 'ф' :
                    this.goToPrevSlide(e);
                    break;
                case 'в' :
                    this.goToNextSlide(e);
                    break;
            }
        };

        window.addEventListener('resize', this.handleResize);

        let timeout = false;
        window.onscroll = () => {
            if (timeout !== false) {
                clearTimeout(timeout);
            }

            timeout = setTimeout(() => {
                const anchor = document.getElementById('carousel');

                if (anchor !== null) {
                    anchor.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 2300);
        };
    }

    /**
     * Обработчик изменения размера окна
     */
    handleResize() {
        // При изменении размера окна пересчитываем высоту вариантов ответов
        setTimeout(() => {
            const rows = document.querySelectorAll('.divAnswer');
            rows.forEach(row => {
                const labels = row.querySelectorAll('.labelAnswer');
                let maxHeight = 0;

                // Сбрасываем высоту
                labels.forEach(label => {
                    label.style.minHeight = '';
                    const height = label.offsetHeight;
                    if (height > maxHeight) maxHeight = height;
                });

                // Устанавливаем новую высоту
                if (maxHeight > 0) {
                    labels.forEach(label => {
                        label.style.minHeight = `${maxHeight}px`;
                    });
                }
            });
        }, 100);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    /**
     * Метод открытия кнопки 'Закончить!'
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
     * Обработчик кнопки 'Закончить тест' или 'Вернуться к результатам'
     * @param {event} e
     */
    final(e) {
        e.preventDefault();

        const {slides, testName, dispatchResultTest, diff, showingAnswers} = this.props;

        // Если мы уже просматриваем ответы, возвращаемся к результатам
        if (showingAnswers) {
            const divCarousel = document.querySelector(`div[class='carousel-div']`);
            const divCarouselResult = document.querySelector(`div[class='carousel-result']`);

            divCarousel.setAttribute('hidden', 'true');
            divCarouselResult.removeAttribute('hidden');

            // Прокручиваем страницу вверх
            window.scrollTo(0, 0);
            return;
        }

        // Иначе завершаем тест
        const result = {
            test: testName,
            diffical: diff,
            answers: {}
        };

        //меняем цвет у таймера
        const timerElement = document.getElementsByClassName('timer')['0'];
        if (timerElement) {
            timerElement.style.color = '#4caf50';
        }

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

        this.setState({
            correctAnswer: true
        });

        dispatchResultTest(result);
    }

    render() {
		const { testName, showingAnswers } = this.props;

        // Определяем текст кнопки в зависимости от режима
        const buttonText = showingAnswers ? '📊 Вернуться к результатам' : 'Закончить тест!';

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
							testName={testName}
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
                        onClick={e => this.final(e)}>{buttonText}
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
