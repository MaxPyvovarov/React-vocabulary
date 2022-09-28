import {ADD_NEW_WORD} from '../actions/actionTypes';

const initialState = {
	vocabulary: [
		// {id: 1, eng: 'test', ukr: 'тест'},
		// {id: 2, eng: 'test', ukr: 'тест'},
		// {id: 3, eng: 'test', ukr: 'тест'},
		// {id: 4, eng: 'test', ukr: 'тест'},
		// {id: 5, eng: 'test', ukr: 'тест'},
		// {id: 6, eng: 'test', ukr: 'тест'},
		// {id: 7, eng: 'test', ukr: 'тест'},
		// {id: 8, eng: 'test', ukr: 'тест'},
		// {id: 9, eng: 'test', ukr: 'тест'},
	],
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
