import React from 'react';
import { Provider } from 'react-redux';
import Main from './main';

const Root = ({ store }) => {
  return(
    <Provider store={store}>
      <Main></Main>
    </Provider>
  )
};

export default Root;
