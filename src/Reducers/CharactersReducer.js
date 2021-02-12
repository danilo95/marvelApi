const initialState = {
	listOfCharacters: [],
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALL_CHARACTERS':
			return {
				...state,
				listOfCharacters: action.payload,
				loading: false,
			};
		case 'LOADING_CHARACTERS':
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
};
