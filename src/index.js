import 'babel-polyfill';

import React from 'react';
import {render, ReactDOM} from 'react-dom';

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer from './reducers';
import rootSaga from './sagas';
import App from './components/app';

const history = createHistory();
const middleware = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant(), middleware))
  );

sagaMiddleware.run(rootSaga);

render (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Route path="/" component={App}/>
    	</ConnectedRouter>
	</Provider>, 
	document.getElementById('app')
	);