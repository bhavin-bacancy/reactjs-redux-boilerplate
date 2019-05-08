import React from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '../redux/actions/index';


function App({ userReducer, dispatch }) {
	return (
		<div>
			{/* eslint-disable-next-line max-len */}
			<button type="button" onClick={() => dispatch(setUserInfo({ name: 'test' }))}> Display </button>
			<div>
				<h4> 
					{userReducer.name}
				</h4>
				<h4>
					{userReducer.age}
				</h4>
			</div>
		</div>
	);
}

const select = state => state;
export default connect(select)(App);
