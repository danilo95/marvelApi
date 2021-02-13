const initialState = {
	listOfStories: [],
	loading: false,
	storie: [],
	comics: [],
	loadingComics: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALL_STORIES':
			return {
				...state,
				listOfStories: action.payload,
				loading: false,
			};
		case 'GET_SINGLE_STORIE':
			return {
				...state,
				storie: action.payload,
				loading: false,
			};
		case 'GET_COMICS_PER_STORIE':
			return {
				...state,
				comics: action.payload,
				loadingComics: false,
			};
		case 'LOADING_COMICS':
			return {
				...state,
				loadingComics: action.payload,
			};
		case 'LOADING_STORIES':
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
};
