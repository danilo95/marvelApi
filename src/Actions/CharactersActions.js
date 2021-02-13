import {
	getCharacters,
	getSingleCharacter,
	getComicsPerChracter,
	getSeriesPerChracter,
	getStoriesPerChracter,
} from '../Components/api/Api';

export const getAllCharacters = (params, offSet) => async (dispatch) => {
	if (!offSet) {
		offSet = 0;
	}
	const response = await getCharacters(params, offSet);
	dispatch({ type: 'GET_ALL_CHARACTERS', payload: response.data });
	dispatch({ type: 'LOADING_CHARACTERS', payload: false });
};

export const loadingCharacters = () => (dispatch) => {
	dispatch({ type: 'LOADING_CHARACTERS', payload: true });
};

export const getCharacterById = (id) => async (dispatch) => {
	const response = await getSingleCharacter(id);
	dispatch({ type: 'GET_SINGLE_CHARACTER', payload: response.data });
	dispatch({ type: 'LOADING_CHARACTERS', payload: false });
};

export const loadingCharactersComics = () => (dispatch) => {
	dispatch({ type: 'LOADING_CHARACTER_COMICS', payload: true });
};

export const getCharacterComics = (id, offset) => async (dispatch) => {
	const response = await getComicsPerChracter(id, offset);
	dispatch({ type: 'GET_COMICS_PER_CHARACTER', payload: response.data });
	dispatch({ type: 'LOADING_CHARACTER_COMICS', payload: false });
};

export const loadingCharactersSeries = () => (dispatch) => {
	dispatch({ type: 'LOADING_CHARACTER_SERIES', payload: true });
};

export const getCharacterSeries = (id, offset) => async (dispatch) => {
	const response = await getSeriesPerChracter(id, offset);
	dispatch({ type: 'GET_SERIES_PER_CHARACTER', payload: response.data });
	dispatch({ type: 'LOADING_CHARACTER_SERIES', payload: false });
};

export const loadingCharactersStories = () => (dispatch) => {
	dispatch({ type: 'LOADING_CHARACTER_STORIES', payload: true });
};

export const getCharacterStories = (id, offset) => async (dispatch) => {
	const response = await getStoriesPerChracter(id, offset);
	dispatch({ type: 'GET_STORIES_PER_CHARACTER', payload: response.data });
	dispatch({ type: 'LOADING_CHARACTER_STORIES', payload: false });
};
