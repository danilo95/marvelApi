const initialState = {
	listOfCharacters: [],
	loading: false,
	character: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALL_CHARACTERS':
			return {
				...state,
				listOfCharacters: action.payload,
				loading: false,
			};
		case 'GET_SINGLE_CHARACTER':
			return {
				...state,
				character: action.payload,
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
