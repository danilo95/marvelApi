import { combineReducers } from 'redux';
import ComicsReducer from './ComicsReducer';
import CharactersReducer from './CharactersReducer';
import StoriesReducer from './StoriesReducer';
import SeriesReducer from './SeriesReducer';

export default combineReducers({
	comics: ComicsReducer,
	characters: CharactersReducer,
	stories: StoriesReducer,
	series: SeriesReducer,
});
