import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import appReducer from './common/reducers';

const middleware = [promiseMiddleware, logger]
const appStore = createStore(appReducer , {}, applyMiddleware(...middleware))
ReactDOM.render(
  <Provider store={appStore}>
  <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
