import React from 'react';
import { renderToString } from 'react-dom/server';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './App.container';

const server = (initialState) => {
  const store = configureStore(initialState);
  const content = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const preloadedState = store.getState();
  return { content, preloadedState };
};

const bundle = () => {
  const store = configureStore();
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  );
};

const client = (state) => {
  const store = configureStore({ ...state, isFetching: false, type: 'client' });
  hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  );
};

export { client, bundle, server };
