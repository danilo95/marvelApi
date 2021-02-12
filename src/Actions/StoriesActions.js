import { getStories } from '../Components/api/Api';

export const getAllStories = () => async (dispatch) => {
	const response = await getStories();
	dispatch({ type: 'GET_ALL_STORIES', payload: response.data });
	dispatch({ type: 'LOADING_STORIES', payload: false });
};

export const loadingCharacters = () => (dispatch) => {
	dispatch({ type: 'LOADING_STORIES', payload: true });
};
