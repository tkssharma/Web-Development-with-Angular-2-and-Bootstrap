import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import store from './store/index';


ReactDOM.render(
  <Provider  store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));
