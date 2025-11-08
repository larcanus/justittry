import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Test from './test';
import { selectIsTestConfigValid } from '../../../store/selectors/testSelectors';

const CheckTest = () => {
    const isTestConfigValid = useSelector(selectIsTestConfigValid);

    if (!isTestConfigValid) {
        return <Redirect push to='/' />;
    }

    return (
        <div>
            <Test />
        </div>
    );
};

export default CheckTest;
