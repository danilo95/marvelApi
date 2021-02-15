import {
	getStories,
	getSingleStorie,
	getDetailsFromId,
} from '../Components/api/Api';

export const types = {
	GET_ALL_STORIES: 'GET_ALL_STORIES',
	LOADING_STORIES: 'LOADING_STORIES',
	GET_SINGLE_STORIE: 'GET_SINGLE_STORIE',
	LOADING_COMICS: 'LOADING_COMICS',
	GET_COMICS_PER_STORIE: 'GET_COMICS_PER_STORIE',
	LOADING_SERIES: 'LOADING_SERIES',
	GET_SERIES_PER_STORIE: 'GET_SERIES_PER_STORIE',
	GET_SINGLE_STORIE_ERROR: 'GET_SINGLE_STORIE_ERROR',
	GET_STORIE_CHARACTERS: 'GET_STORIE_CHARACTERS',
	LOADING_CHARACTERS: 'LOADING_CHARACTERS',
};

export const getAllStories = (offSet) => async (dispatch) => {
	const response = await getStories(offSet);
	if (response.error) {
		dispatch({
			type: types.GET_SINGLE_STORIE_ERROR,
			payload: response.error,
		});
	} else {
		dispatch({ type: types.GET_ALL_STORIES, payload: response.data });
		dispatch({ type: types.LOADING_STORIES, payload: false });
	}
};

export const loadingCharacters = () => (dispatch) => {
	dispatch({ type: types.LOADING_STORIES, payload: true });
};

export const getStorie = (id) => async (dispatch) => {
	const response = await getSingleStorie(id);
	if (response.error) {
		dispatch({
			type: types.GET_SINGLE_STORIE_ERROR,
			payload: response.error,
		});
	} else {
		dispatch({ type: types.GET_SINGLE_STORIE, payload: response.data });
		dispatch({ type: types.LOADING_STORIES, payload: false });
	}
};

export const loadingComicsFromStorie = () => (dispatch) => {
	dispatch({ type: types.LOADING_COMICS, payload: true });
};

export const getComicsFromStorie = (id, offset) => async (dispatch) => {
	const response = await getDetailsFromId(id, offset, 'stories', 'comics');
	dispatch({ type: types.GET_COMICS_PER_STORIE, payload: response.data });
	dispatch({ type: types.LOADING_COMICS, payload: false });
};

export const loadingSeriesFromStorie = () => (dispatch) => {
	dispatch({ type: types.LOADING_SERIES, payload: true });
};

export const getSeriesFromStorie = (id, offset) => async (dispatch) => {
	const response = await getDetailsFromId(id, offset, 'stories', 'series');
	dispatch({ type: types.GET_SERIES_PER_STORIE, payload: response.data });
	dispatch({ type: types.LOADING_SERIES, payload: false });
};

export const getStorieCharacters = (id, offset) => async (dispatch) => {
	const response = await getDetailsFromId(
		id,
		offset,
		'stories',
		'characters'
	);
	dispatch({
		type: types.GET_STORIE_CHARACTERS,
		payload: response.data.results,
	});
	dispatch({ type: types.LOADING_CHARACTERS, payload: false });
};

export const loadingStorieCharacters = () => (dispatch) => {
	dispatch({ type: types.LOADING_CHARACTERS, payload: true });
};
