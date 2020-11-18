import 'babel-polyfill';
import React from 'react';
import {render, ReactDOM} from 'react-dom';
import App from './components/app';

render (
	<App/>,
	document.getElementById('app')
);