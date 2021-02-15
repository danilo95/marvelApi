import {
	getCharacters,
	getSingleCharacter,
	getComicsPerChracter,
	getSeriesPerChracter,
	getStoriesPerChracter,
} from '../Components/api/Api';

export const types = {
	GET_ALL_CHARACTERS: 'GET_ALL_CHARACTERS',
	LOADING_CHARACTERS: 'LOADING_CHARACTERS',
	GET_SINGLE_CHARACTER: 'GET_SINGLE_CHARACTER',
	LOADING_CHARACTERS: 'LOADING_CHARACTERS',
	LOADING_CHARACTER_COMICS: 'LOADING_CHARACTER_COMICS',
	GET_COMICS_PER_CHARACTER: 'GET_COMICS_PER_CHARACTER',
	LOADING_CHARACTER_SERIES: 'LOADING_CHARACTER_SERIES',
	GET_SERIES_PER_CHARACTER: 'GET_SERIES_PER_CHARACTER',
	LOADING_CHARACTER_STORIES: 'LOADING_CHARACTER_STORIES',
	GET_STORIES_PER_CHARACTER: 'GET_STORIES_PER_CHARACTER',
	GET_SINGLE_CHARACTER_ERROR: 'GET_SINGLE_CHARACTER_ERROR',
};

export const getAllCharacters = (params, offSet) => async (dispatch) => {
	if (!offSet) {
		offSet = 0;
	}
	const response = await getCharacters(params, offSet);
	dispatch({ type: types.GET_ALL_CHARACTERS, payload: response.data });
	dispatch({ type: types.LOADING_CHARACTERS, payload: false });
};

export const loadingCharacters = () => (dispatch) => {
	dispatch({ type: types.LOADING_CHARACTERS, payload: true });
};

export const getCharacterById = (id) => async (dispatch) => {
	const response = await getSingleCharacter(id);
	if (response.error) {
		dispatch({
			type: types.GET_SINGLE_CHARACTER_ERROR,
			payload: response.error,
		});
	} else {
		dispatch({ type: types.GET_SINGLE_CHARACTER, payload: response.data });
		dispatch({ type: types.LOADING_CHARACTERS, payload: false });
	}
};

export const loadingCharactersComics = () => (dispatch) => {
	dispatch({ type: types.LOADING_CHARACTER_COMICS, payload: true });
};

export const getCharacterComics = (id, offset) => async (dispatch) => {
	const response = await getComicsPerChracter(id, offset);
	dispatch({ type: types.GET_COMICS_PER_CHARACTER, payload: response.data });
	dispatch({ type: types.LOADING_CHARACTER_COMICS, payload: false });
};

export const loadingCharactersSeries = () => (dispatch) => {
	dispatch({ type: types.LOADING_CHARACTER_SERIES, payload: true });
};

export const getCharacterSeries = (id, offset) => async (dispatch) => {
	const response = await getSeriesPerChracter(id, offset);
	dispatch({ type: types.GET_SERIES_PER_CHARACTER, payload: response.data });
	dispatch({ type: types.LOADING_CHARACTER_SERIES, payload: false });
};

export const loadingCharactersStories = () => (dispatch) => {
	dispatch({ type: types.LOADING_CHARACTER_STORIES, payload: true });
};

export const getCharacterStories = (id, offset) => async (dispatch) => {
	const response = await getStoriesPerChracter(id, offset);
	dispatch({ type: types.GET_STORIES_PER_CHARACTER, payload: response.data });
	dispatch({ type: types.LOADING_CHARACTER_STORIES, payload: false });
};
