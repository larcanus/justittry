import React, {Component} from 'react';
import {connect} from 'react-redux';
import {REMOVE_TEST} from '../../../common/constants';
import newValue from '../actions/newValue';
import js from '../../../common/images/js-logo.png';
import dart from '../../../common/images/dart-logo.png';
import html from '../../../common/images/html-logo.png';
import php from '../../../common/images/php-logo.png';

class Navbar extends Component {
    componentDidMount() {
        this.props.choiceTestAction(REMOVE_TEST);
    }

    render() {
        const {choiceTestAction} = this.props;

        const choiceTest = (e) => {
            choiceTestAction(e.target.id);
        }

        return (
            <div className='navbar'>
                <input type='radio' id='radio-1' name='radio1' className='navbar__radio'/>
                <label htmlFor='radio-1' className='navbar__label'>
                    <img
                        className='navbar__test-logo'
                        id='js-test-logo'
                        src={js}
                        onClick={choiceTest}
                        alt='JavaScript Test'
                    />
                </label>

                <input type='radio' id='radio-2' name='radio1' className='navbar__radio'/>
                <label htmlFor='radio-2' className='navbar__label'>
                    <img
                        className='navbar__test-logo'
                        id='html-test-logo'
                        src={html}
                        onClick={choiceTest}
                        alt='HTML Test'
                    />
                </label>

                <input type='radio' id='radio-3' name='radio1' className='navbar__radio'/>
                <label htmlFor='radio-3' className='navbar__label'>
                    <img
                        className='navbar__test-logo'
                        id='dart-test-logo'
                        src={dart}
                        onClick={choiceTest}
                        alt='Dart Test'
                    />
                </label>

                <input type='radio' id='radio-4' name='radio1' className='navbar__radio'/>
                <label htmlFor='radio-4' className='navbar__label'>
                    <img
                        className='navbar__test-logo'
                        id='php-test-logo'
                        src={php}
                        onClick={choiceTest}
                        alt='PHP Test'
                    />
                </label>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        choiceTestAction: (test) => {
            dispatch(newValue(test));
        }
    }
};

export default connect(null, mapDispatchToProps)(Navbar);
