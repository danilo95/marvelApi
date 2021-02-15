import { types } from '../Actions/StoriesActions';

const initialState = {
	listOfStories: [],
	loading: false,
	storie: [],
	comics: [],
	loadingComics: false,
	series: [],
	loadingSeries: false,
	characters: [],
	loadingCharactersList: [],
	error: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_ALL_STORIES:
			return {
				...state,
				listOfStories: action.payload,
				loading: false,
			};
		case types.GET_SINGLE_STORIE:
			return {
				...state,
				storie: action.payload,
				loading: false,
			};
		case types.GET_COMICS_PER_STORIE:
			return {
				...state,
				comics: action.payload,
				loadingComics: false,
			};
		case types.GET_SERIES_PER_STORIE:
			return {
				...state,
				series: action.payload,
				loadingSeries: false,
			};
		case types.GET_SINGLE_STORIE_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case types.GET_STORIE_CHARACTERS:
			return {
				...state,
				characters: action.payload,
				loadingCharactersList: false,
			};
		case types.LOADING_CHARACTERS:
			return {
				...state,
				loadingCharactersList: action.payload,
			};
		case types.LOADING_SERIES:
			return {
				...state,
				loadingSeries: action.payload,
			};
		case types.LOADING_COMICS:
			return {
				...state,
				loadingComics: action.payload,
			};
		case types.LOADING_STORIES:
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
};
