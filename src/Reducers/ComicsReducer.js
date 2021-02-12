const initialState = {
	listOfComics: [],
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALL_COMICS':
			return {
				...state,
				listOfComics: action.payload,
				loading: false,
			};
		case 'LOADING_COMICS':
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
};
