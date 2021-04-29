import React from 'react';
import ConfigTest from '../containers/configtest';
import {connect} from "react-redux";


const Maincomp = ({test}) => {
  
    return (
        <div className='divMain'>
            <p><b>{test.testNow}.</b></p>
            <ConfigTest/>
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        test: store.test,
        testConfig: store.testConfig.startTestConfig
    }
};

export default connect(mapStateToProps)(Maincomp);
