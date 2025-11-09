import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Test from './test';
import { isTestConfigValid } from '../selectors/testSelectors';

const CheckTest = ({ isValid }) => {
    if (!isValid) {
        return <Redirect push to='/' />;
    }

    return (
        <div>
            <Test />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isValid: isTestConfigValid(state)
});

export default connect(mapStateToProps)(CheckTest);
