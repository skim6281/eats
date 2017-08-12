import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducer';
import Root from './root';
import { fetchRestaurants } from './actions';

window.fetchRestaurants = fetchRestaurants;

const configureStore = (preloadedState = {}) => (
  createStore(
    Reducer,
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
