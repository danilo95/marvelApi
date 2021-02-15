import { types } from '../Actions/ComicsActions';

const initialState = {
	listOfComics: [],
	loading: false,
	comic: [],
	comicStories: [],
	loadingStories: false,
	comicCharacters: [],
	loadingCharacter: false,
	error: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_ALL_COMICS:
			return {
				...state,
				listOfComics: action.payload,
				loading: false,
			};
		case types.GET_SINGLE_COMIC:
			return {
				...state,
				comic: action.payload,
				loading: false,
			};
		case types.GET_STORIES_PER_COMIC:
			return {
				...state,
				comicStories: action.payload,
				loadingStories: false,
			};
		case types.GET_CHARACTERS_PER_COMIC:
			return {
				...state,
				comicCharacters: action.payload,
				loadingCharacter: false,
			};
		case types.GET_SINGLE_COMIC_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case types.LOADING_COMICS_CHARACTERS:
			return {
				...state,
				loadingCharacter: action.payload,
			};
		case types.LOADING_COMICS_STORIES:
			return {
				...state,
				loadingStories: action.payload,
			};
		case types.LOADING_COMICS:
			return {
				...state,
				loading: action.payload,
			};

		default:
			return state;
	}
};
