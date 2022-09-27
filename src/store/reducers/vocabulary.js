import {ADD_NEW_WORD} from '../actions/actionTypes';

const initialState = {
	vocabulary: [],
};

export default function vocabularyReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_NEW_WORD:
			return {
				...state,
				vocabulary: [...state.vocabulary, action.payload],
			};
		default:
			return state;
	}
}
