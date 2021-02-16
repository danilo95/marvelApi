import { getSingleSerie } from '../Components/api/Api';

export const types = {
	GET_SINGLE_SERIE: 'GET_SINGLE_SERIE',
	LOADING_SERIE: 'LOADING_SERIE',
	GET_SERIE_ERROR: 'GET_SERIE_ERROR',
};

export const loadingSerie = () => (dispatch) => {
	dispatch({ type: types.LOADING_SERIE, payload: true });
};

export const getSerieById = (id) => async (dispatch) => {
	const response = await getSingleSerie(id);
	if (response.error) {
		dispatch({
			type: types.GET_SERIE_ERROR,
			payload: response.error,
		});
	} else {
		dispatch({ type: types.GET_SINGLE_SERIE, payload: response.data });
		dispatch({ type: types.LOADING_SERIE, payload: false });
	}
};
