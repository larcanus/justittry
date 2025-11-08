import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { choiceTest, resetTest } from '../../../store/slices/testSlice';
import { getTestName } from '../../../utils/testMapper';
import style from '../styles/style.css';
import js from '../../../common/images/js-logo.png';
import dart from '../../../common/images/dart-logo.png';
import html from '../../../common/images/html-logo.png';
import php from '../../../common/images/php-logo.png';


const Navbar = () => {
    const dispatch = useDispatch();

    // Сброс теста при монтировании компонента
    useEffect(() => {
        dispatch(resetTest());
    }, [dispatch]);

    /**
     * Обработчик выбора теста
     * @param {Event} e - Событие клика
     */
    const handleChoiceTest = (e) => {
        const testId = e.target.id;
        const testName = getTestName(testId);

        // Диспатчим название теста в store
        dispatch(choiceTest(testName));
    };

    return (
        <div className='divNavbar' style={style}>
            <input type='radio' id='radio-1' name='radio1'/>
            <label htmlFor='radio-1'>
                <img
                    className='logoBtnNavbar'
                    id='js-test-logo'
                    src={js}
                    onClick={handleChoiceTest}
                    alt='js-test'
                />
            </label>

            <input type='radio' id='radio-2' name='radio1'/>
            <label htmlFor='radio-2'>
                <img
                    className='logoBtnNavbar'
                    id='html-test-logo'
                    src={html}
                    onClick={handleChoiceTest}
                    alt='html-test'
                />
            </label>

            <input type='radio' id='radio-3' name='radio1'/>
            <label htmlFor='radio-3'>
                <img
                    className='logoBtnNavbar'
                    id='dart-test-logo'
                    src={dart}
                    onClick={handleChoiceTest}
                    alt='dart-test'
                />
            </label>

            <input type='radio' id='radio-4' name='radio1'/>
            <label htmlFor='radio-4'>
                <img
                    className='logoBtnNavbar'
                    id='php-test-logo'
                    src={php}
                    onClick={handleChoiceTest}
                    alt='php-test'
                />
            </label>
        </div>
    );
};

export default Navbar;
