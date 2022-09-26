import {combineReducers} from 'redux';
import vocabularyReducer from './vocabulary';

export default combineReducers({
	vocabulary: vocabularyReducer,
});
