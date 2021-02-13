import {
	getComics,
	getSingleComic,
	getStoriesPerComic,
} from '../Components/api/Api';

export const getAllComics = (params, offSet) => async (dispatch) => {
	if (!offSet) {
		offSet = 0;
	}
	const response = await getComics(params, offSet);
	dispatch({ type: 'GET_ALL_COMICS', payload: response.data });
	dispatch({ type: 'LOADING_COMICS', payload: false });
};

export const loadingComics = () => (dispatch) => {
	dispatch({ type: 'LOADING_COMICS', payload: true });
};

export const getComicById = (id) => async (dispatch) => {
	const response = await getSingleComic(id);
	dispatch({ type: 'LOADING_COMICS', payload: true });
	dispatch({ type: 'GET_SINGLE_COMIC', payload: response.data });
	dispatch({ type: 'LOADING_COMICS', payload: false });
};

export const loadingComicStories = () => (dispatch) => {
	dispatch({ type: 'LOADING_COMICS_STORIES', payload: true });
};

export const getComicStories = (id, offset) => async (dispatch) => {
	const response = await getStoriesPerComic(id, offset);
	dispatch({ type: 'GET_STORIES_PER_COMIC', payload: response.data });
	dispatch({ type: 'LOADING_COMICS_STORIES', payload: false });
};
