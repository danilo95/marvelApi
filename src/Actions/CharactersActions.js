import { getCharacters, getSingleCharacter } from '../Components/api/Api';

export const getAllCharacters = (params, offSet) => async (dispatch) => {
	if (!offSet) {
		offSet = 0;
	}
	const response = await getCharacters(params, offSet);
	dispatch({ type: 'GET_ALL_CHARACTERS', payload: response.data });
	dispatch({ type: 'LOADING_CHARACTERS', payload: false });
};

export const loadingCharacters = () => (dispatch) => {
	dispatch({ type: 'LOADING_CHARACTERS', payload: true });
};

export const getCharacterById = (id) => async (dispatch) => {
	const response = await getSingleCharacter(id);
	dispatch({ type: 'GET_SINGLE_CHARACTER', payload: response.data });
	dispatch({ type: 'LOADING_CHARACTERS', payload: false });
};
