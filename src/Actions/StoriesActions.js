import { getStories, getSingleStorie } from '../Components/api/Api';

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
