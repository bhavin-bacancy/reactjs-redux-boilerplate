const initialState = {
	name: '',
	age: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
	case 'TEST':
		return Object.assign({}, state, { ...action.payload });
	default:
		return state;
	}
};
