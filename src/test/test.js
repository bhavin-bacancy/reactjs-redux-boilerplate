import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from './test.action';

class Test extends Component {
	render() {
		return (
			<div>
				<button onClick={() => this.props.dispatch(setUserInfo({ name: 'Kishan', age: 22 }))}>Display name</button>
			</div>
		);
	}
}

const select = state => state;
export default connect(select)(Test);
