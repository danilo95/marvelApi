import {
	getStories,
	getSingleStorie,
	getComicsPerStory,
	getSeriessPerStory,
} from '../Components/api/Api';

export const types = {
	GET_ALL_STORIES: 'GET_ALL_STORIES',
	LOADING_STORIES: 'LOADING_STORIES',
	GET_SINGLE_STORIE: 'GET_SINGLE_STORIE',
	LOADING_COMICS: 'LOADING_COMICS',
	GET_COMICS_PER_STORIE: 'GET_COMICS_PER_STORIE',
	LOADING_SERIES: 'LOADING_SERIES',
	GET_SERIES_PER_STORIE: 'GET_SERIES_PER_STORIE',
};

export const getAllStories = () => async (dispatch) => {
	const response = await getStories();
	dispatch({ type: types.GET_ALL_STORIES, payload: response.data });
	dispatch({ type: types.LOADING_STORIES, payload: false });
};

export const loadingCharacters = () => (dispatch) => {
	dispatch({ type: types.LOADING_STORIES, payload: true });
};

export const getStorie = (id) => async (dispatch) => {
	const response = await getSingleStorie(id);
	dispatch({ type: types.GET_SINGLE_STORIE, payload: response.data });
	dispatch({ type: types.LOADING_STORIES, payload: false });
};

export const loadingComicsFromStorie = () => (dispatch) => {
	dispatch({ type: types.LOADING_COMICS, payload: true });
};

export const getComicsFromStorie = (id, offset) => async (dispatch) => {
	const response = await getComicsPerStory(id, offset);
	dispatch({ type: types.GET_COMICS_PER_STORIE, payload: response.data });
	dispatch({ type: types.LOADING_COMICS, payload: false });
};

export const loadingSeriesFromStorie = () => (dispatch) => {
	dispatch({ type: types.LOADING_SERIES, payload: true });
};

export const getSeriesFromStorie = (id, offset) => async (dispatch) => {
	const response = await getSeriessPerStory(id, offset);
	dispatch({ type: types.GET_SERIES_PER_STORIE, payload: response.data });
	dispatch({ type: types.LOADING_SERIES, payload: false });
};
