import { getCharacters, getSingleCharacter } from '../Components/api/Api';

export const getAllCharacters = () => async (dispatch) => {
	const response = await getCharacters();
	dispatch({ type: 'GET_ALL_CHARACTERS', payload: response.data });
	dispatch({ type: 'LOADING_CHARACTERS', payload: false });
};

export const loadingCharacters = () => (dispatch) => {
	dispatch({ type: 'LOADING_CHARACTERS', payload: true });
};

export const getCharacterById = (id) => async (dispatch) => {
	const response = await getSingleCharacter(id);
	dispatch({ type: 'LOADING_CHARACTERS', payload: true });
	dispatch({ type: 'GET_SINGLE_CHARACTER', payload: response.data });
	dispatch({ type: 'LOADING_CHARACTERS', payload: false });
};
