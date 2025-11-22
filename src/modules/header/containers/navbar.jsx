import React, {Component} from 'react';
import {connect} from 'react-redux';
import {REMOVE_TEST} from '../../../common/constants';
import newValue from '../actions/newValue';
import js from '../../../common/images/js-logo.png';
import dart from '../../../common/images/dart-logo.png';
import html from '../../../common/images/html-logo.png';
import php from '../../../common/images/php-logo.png';
import py from '../../../common/images/py-logo.png';

class Navbar extends Component {
    componentDidMount() {
        this.props.choiceTestAction(REMOVE_TEST);
    }

    handleTestChoice = (e) => {
        this.props.choiceTestAction(e.target.value);
    }

    render() {
        return (
            <div className='navbar'>
                <input
                    type='radio'
                    id='radio-1'
                    name='radio1'
                    value='js-test-logo'
                    className='navbar__radio'
                    onChange={this.handleTestChoice}
                />
                <label htmlFor='radio-1' className='navbar__label'>
                    <img
                        className='navbar__test-logo'
                        src={js}
                        alt='JavaScript Test'
                    />
                </label>

                <input
                    type='radio'
                    id='radio-2'
                    name='radio1'
                    value='html-test-logo'
                    className='navbar__radio'
                    onChange={this.handleTestChoice}
                />
                <label htmlFor='radio-2' className='navbar__label'>
                    <img
                        className='navbar__test-logo'
                        src={html}
                        alt='HTML Test'
                    />
                </label>

                <input
                    type='radio'
                    id='radio-3'
                    name='radio1'
                    value='dart-test-logo'
                    className='navbar__radio'
                    onChange={this.handleTestChoice}
                />
                <label htmlFor='radio-3' className='navbar__label'>
                    <img
                        className='navbar__test-logo'
                        src={dart}
                        alt='Dart Test'
                    />
                </label>

                <input
                    type='radio'
                    id='radio-4'
                    name='radio1'
                    value='php-test-logo'
                    className='navbar__radio'
                    onChange={this.handleTestChoice}
                />
                <label htmlFor='radio-4' className='navbar__label'>
                    <img
                        className='navbar__test-logo'
                        src={php}
                        alt='PHP Test'
                    />
                </label>

                <input
                    type='radio'
                    id='radio-5'
                    name='radio1'
                    value='py-test-logo'
                    className='navbar__radio'
                    onChange={this.handleTestChoice}
                />
                <label htmlFor='radio-5' className='navbar__label'>
                    <img
                        className='navbar__test-logo'
                        src={py}
                        alt='PYTHON Test'
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
