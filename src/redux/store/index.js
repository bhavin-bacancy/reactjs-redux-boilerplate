import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(initialState) {
	const middleware = [thunk];
	middleware.push(createLogger({ collapsed: true }));
	// eslint-disable-next-line max-len
	return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware), f => f));
}
