import { combineReducers } from 'redux';
import ComicsReducer from './ComicsReducer';
import CharactersReducer from './CharactersReducer';
import StoriesReducer from './StoriesReducer';

export default combineReducers({
	comics: ComicsReducer,
	characters: CharactersReducer,
	stories: StoriesReducer,
});
