import {TEST_REDUX} from '../actions/actionTypes';

const initialState = {
	vocabulary: [{id: 1, eng: 'dog', ukr: 'собака'}],
};

export default function vocabularyReducer(state = initialState, action) {
	switch (action.type) {
		case TEST_REDUX:
			console.log('reducer');
			return {
				...state,
				vocabulary: [...state.vocabulary, action.pair],
			};
		default:
			return state;
	}
}
