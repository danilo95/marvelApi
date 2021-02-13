const initialState = {
	listOfCharacters: [],
	loading: false,
	character: [],
	characterComics: [],
	loadingComics: false,
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
		case 'GET_COMICS_PER_CHARACTER':
			return {
				...state,
				characterComics: action.payload,
				loadingComics: false,
			};
		case 'LOADING_CHARACTERS':
			return {
				...state,
				loading: action.payload,
			};
		case 'LOADING_CHARACTER_COMICS':
			return {
				...state,
				loadingComics: action.payload,
			};
		default:
			return state;
	}
};
