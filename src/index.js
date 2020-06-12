/*
 * @Descripttion:
 * @version:
 * @Author: fl
 * @Date: 2020-06-11 09:22:43
 * @LastEditors: fl
 * @LastEditTime: 2020-06-11 16:08:03
 */
// import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Main from './components/Main';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import 'antd/dist/antd.css';
import './styles/App.css';
import { getAllProducts } from './actions';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

store.dispatch(getAllProducts());

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
