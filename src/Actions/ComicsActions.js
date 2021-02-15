import {
	getComics,
	getSingleComic,
	getStoriesPerComic,
	getCharactersPerComic,
} from '../Components/api/Api';

export const types = {
	GET_ALL_COMICS: 'GET_ALL_COMICS',
	LOADING_COMICS: 'LOADING_COMICS',
	GET_SINGLE_COMIC: 'GET_SINGLE_COMIC',
	LOADING_COMICS_STORIES: 'LOADING_COMICS_STORIES',
	GET_STORIES_PER_COMIC: 'GET_STORIES_PER_COMIC',
	LOADING_COMICS_CHARACTERS: 'LOADING_COMICS_CHARACTERS',
	GET_CHARACTERS_PER_COMIC: 'GET_CHARACTERS_PER_COMIC',
	GET_SINGLE_COMIC_ERROR: 'GET_SINGLE_COMIC_ERROR',
};

export const getAllComics = (params, offSet) => async (dispatch) => {
	if (!offSet) {
		offSet = 0;
	}
	const response = await getComics(params, offSet);
	if (response.error) {
		dispatch({
			type: types.GET_SINGLE_COMIC_ERROR,
			payload: response.error,
		});
	} else {
		dispatch({ type: types.GET_ALL_COMICS, payload: response.data });
		dispatch({ type: types.LOADING_COMICS, payload: false });
	}
};

export const loadingComics = () => (dispatch) => {
	dispatch({ type: types.LOADING_COMICS, payload: true });
};

export const getComicById = (id) => async (dispatch) => {
	const response = await getSingleComic(id);
	if (response.error) {
		dispatch({
			type: types.GET_SINGLE_COMIC_ERROR,
			payload: response.error,
		});
	} else {
		dispatch({ type: types.GET_SINGLE_COMIC, payload: response.data });
		dispatch({ type: types.LOADING_COMICS, payload: false });
	}
};

export const loadingComicStories = () => (dispatch) => {
	dispatch({ type: types.LOADING_COMICS_STORIES, payload: true });
};

export const getComicStories = (id, offset) => async (dispatch) => {
	const response = await getStoriesPerComic(id, offset);
	dispatch({ type: types.GET_STORIES_PER_COMIC, payload: response.data });
	dispatch({ type: types.LOADING_COMICS_STORIES, payload: false });
};

export const loadingComicCharacters = () => (dispatch) => {
	dispatch({ type: types.LOADING_COMICS_CHARACTERS, payload: true });
};

export const getComicCharacters = (id) => async (dispatch) => {
	const response = await getCharactersPerComic(id);
	dispatch({
		type: types.GET_CHARACTERS_PER_COMIC,
		payload: response.data.results,
	});
	dispatch({ type: types.LOADING_COMICS_CHARACTERS, payload: false });
};
