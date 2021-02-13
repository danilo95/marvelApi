const initialState = {
	listOfComics: [],
	loading: false,
	comic: [],
	comicStories: [],
	loadingStories: false,
	comicCharacters: [],
	loadingCharacter: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALL_COMICS':
			return {
				...state,
				listOfComics: action.payload,
				loading: false,
			};
		case 'GET_SINGLE_COMIC':
			return {
				...state,
				comic: action.payload,
				loading: false,
			};
		case 'GET_STORIES_PER_COMIC':
			return {
				...state,
				comicStories: action.payload,
				loadingStories: false,
			};
		case 'GET_CHARACTERS_PER_COMIC':
			return {
				...state,
				comicCharacters: action.payload,
				loadingCharacter: false,
			};
		case 'LOADING_COMICS_CHARACTERS':
			return {
				...state,
				loadingCharacter: action.payload,
			};
		case 'LOADING_COMICS_STORIES':
			return {
				...state,
				loadingStories: action.payload,
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
