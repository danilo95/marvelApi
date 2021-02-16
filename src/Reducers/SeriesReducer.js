import { types } from '../Actions/SeriesActions';

const initialState = {
	serie: {},
	loading: false,
	error: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_SINGLE_SERIE:
			return {
				...state,
				serie: action.payload,
				loading: false,
			};

		case types.GET_SERIE_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};

		case types.LOADING_SERIE:
			return {
				...state,
				loading: action.payload,
			};

		default:
			return state;
	}
};
