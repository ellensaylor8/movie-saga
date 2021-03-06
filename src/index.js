import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

import { BrowserRouter } from "react-router-dom";

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_GENRES', getGenres);
    yield takeEvery('PUT_MOVIE', putMovies);
}

//saga to GET MOVIES
function* getMovies() {
    try {
        const response = yield axios.get('/api/movie');
        yield put({ type: 'SET_MOVIES', payload: response.data });
    }
    catch (err) {
        console.log('ERROR IN GET MOVIES', err);
    }
}

//saga to GET GENRES
function* getGenres() {
    try {
        const response = yield axios.get('/api/movie');
        yield put({ type: 'SET_GENRES', payload: response.data });
    }
    catch (err) {
        console.log('ERROR IN GET GENRES', err);
    }
}

//saga to PUT
function* putMovies(action) {
    console.log('in put: ',action.payload)
    try {
        yield axios.put('/api/movie', action.payload);
        yield put({ type: 'GET_MOVIES' });
    }
    catch (err) {
        console.log('ERROR IN GET', err);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><BrowserRouter><App /></BrowserRouter></Provider>,
    document.getElementById('root'));
registerServiceWorker();
