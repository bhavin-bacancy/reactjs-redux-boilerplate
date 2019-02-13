import { combineReducers } from 'redux';
// import { routerReducer as routing } from 'react-router-redux';
import testReducer from '../test/test.reducer';

const rootReducer = combineReducers({
	// routing,
	testReducer,
});

export default rootReducer;
