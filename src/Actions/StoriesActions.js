import {
	getStories,
	getSingleStorie,
	getComicsPerStory,
} from '../Components/api/Api';

export const getAllStories = () => async (dispatch) => {
	const response = await getStories();
	dispatch({ type: 'GET_ALL_STORIES', payload: response.data });
	dispatch({ type: 'LOADING_STORIES', payload: false });
};

export const loadingCharacters = () => (dispatch) => {
	dispatch({ type: 'LOADING_STORIES', payload: true });
};

export const getStorie = (id) => async (dispatch) => {
	const response = await getSingleStorie(id);
	dispatch({ type: 'GET_SINGLE_STORIE', payload: response.data });
	dispatch({ type: 'LOADING_STORIES', payload: false });
};
//************** */
export const loadingComicsFromStorie = () => (dispatch) => {
	dispatch({ type: 'LOADING_COMICS', payload: true });
};

export const getComicsFromStorie = (id, offset) => async (dispatch) => {
	const response = await getComicsPerStory(id, offset);
	dispatch({ type: 'GET_COMICS_PER_STORIE', payload: response.data });
	dispatch({ type: 'LOADING_COMICS', payload: false });
};
