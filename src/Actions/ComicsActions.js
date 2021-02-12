import { getComics } from '../Components/api/Api';

export const getAllComics = () => async (dispatch) => {
	const response = await getComics();
	dispatch({ type: 'GET_ALL_COMICS', payload: response.data });
	dispatch({ type: 'LOADING_COMICS', payload: false });
};

export const loadingComics = () => (dispatch) => {
	dispatch({ type: 'LOADING_COMICS', payload: true });
};
