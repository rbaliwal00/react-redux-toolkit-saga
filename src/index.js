import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countrySlice';
import countrySaga from './countrySaga';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    countries: countryReducer
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});
saga.run(countrySaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);