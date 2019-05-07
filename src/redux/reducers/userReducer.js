const initialState = {
	name: '',
	age: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
	case 'setUser':
		return Object.assign({}, state, { ...action.payload });
	default:
		return state;
	}
};
