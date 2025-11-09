import React from 'react';
import {render} from 'react-dom';
import './styles/main.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './store/store'
import {BrowserRouter as Router} from 'react-router-dom';

const app = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
)

render(
    app,
    document.getElementById('root')
);
