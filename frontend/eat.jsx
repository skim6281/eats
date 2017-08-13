import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducer';
import Root from './root';
import { fetchRestaurants } from './actions';

const configureStore = (preloadedState = {}) => (
  createStore(
    combineReducers({ restaurants: Reducer }),
    preloadedState,
    applyMiddleware(thunk)
  )
);

window.fetchRestaurants = fetchRestaurants;

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
