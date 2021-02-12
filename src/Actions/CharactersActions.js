import { getCharacters } from '../Components/api/Api';

export const getAllCharacters = () => async (dispatch) => {
	const response = await getCharacters();
	dispatch({ type: 'GET_ALL_CHARACTERS', payload: response.data });
	dispatch({ type: 'LOADING_CHARACTERS', payload: false });
};

export const loadingCharacters = () => (dispatch) => {
	dispatch({ type: 'LOADING_CHARACTERS', payload: true });
};
