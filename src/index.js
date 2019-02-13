import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Test from './test/test';
import './style.scss';

const store = configureStore({});

ReactDOM.render(
	<Provider store={store}>
		<Test />
	</Provider>,
	document.getElementById('app'),
);
