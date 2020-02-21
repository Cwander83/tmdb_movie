import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';

import App from './App';

import 'normalize.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.css';

ReactDOM.render(
    <Fragment>
        <App />
    </Fragment>,
    document.getElementById('root')
);
