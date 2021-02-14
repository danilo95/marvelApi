import { types } from '../Actions/CharactersActions';
const initialState = {
	listOfCharacters: [],
	loading: false,
	character: [],
	characterComics: [],
	loadingComics: false,
	characterSeries: [],
	loadingSeries: false,
	characterStories: [],
	loadingStories: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_ALL_CHARACTERS:
			return {
				...state,
				listOfCharacters: action.payload,
				loading: false,
			};
		case types.GET_SINGLE_CHARACTER:
			return {
				...state,
				character: action.payload,
				loading: false,
			};
		case types.GET_COMICS_PER_CHARACTER:
			return {
				...state,
				characterComics: action.payload,
				loadingComics: false,
			};
		case types.GET_SERIES_PER_CHARACTER:
			return {
				...state,
				characterSeries: action.payload,
				loadingSeries: false,
			};
		case types.GET_STORIES_PER_CHARACTER:
			return {
				...state,
				characterStories: action.payload,
				loadingStories: false,
			};
		case types.LOADING_CHARACTER_STORIES:
			return {
				...state,
				loadingStories: action.payload,
			};
		case types.LOADING_CHARACTER_SERIES:
			return {
				...state,
				loadingSeries: action.payload,
			};
		case types.LOADING_CHARACTERS:
			return {
				...state,
				loading: action.payload,
			};
		case types.LOADING_CHARACTER_COMICS:
			return {
				...state,
				loadingComics: action.payload,
			};
		default:
			return state;
	}
};
