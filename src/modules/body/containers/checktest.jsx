import React from 'react';
import {connect} from 'react-redux';
import Test from './test';
import {Redirect} from 'react-router-dom';

const CheckTest = ({testConfig}) => {

    let testComponent = null;
    if (testConfig) {
        if (testConfig.optionTest.validDif && testConfig.optionTest.validTest) {
            testComponent = (<Test/>);
        }
    } else {
        testComponent = (
            <Redirect push to='/'/>
        );
    }

    return (
        <div>
            {testComponent}
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        testConfig: store.testConfig.startTestConfig
    }
};

export default connect(mapStateToProps)(CheckTest);

