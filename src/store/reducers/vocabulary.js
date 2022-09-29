import {
	ADD_NEW_WORD,
	CREATE_TEST_START,
	CREATE_TEST_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
	vocabulary: [
		{id: 1, eng: 'cat', ukr: 'кішка'},
		{id: 2, eng: 'dog', ukr: 'собака'},
		{id: 3, eng: 'dolphin', ukr: 'дельфін'},
		{id: 4, eng: 'elephant', ukr: 'слон'},
		{id: 5, eng: 'car', ukr: 'автомобіль'},
		{id: 6, eng: 'man', ukr: 'чоловік'},
		{id: 7, eng: 'woman', ukr: 'жінка'},
		{id: 8, eng: 'smartphone', ukr: 'смартфон'},
		{id: 9, eng: 'sun', ukr: 'сонце'},
		{id: 10, eng: 'moon', ukr: 'луна'},
	],
	results: {},
	isFinished: false,
	loading: false,
	activeQuestion: 0,
	test: null,
};

export default function vocabularyReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_NEW_WORD:
			return {
				...state,
				vocabulary: [...state.vocabulary, action.payload],
			};
		case CREATE_TEST_START:
			return {
				...state,
				loading: action.payload.loading,
			};
		case CREATE_TEST_SUCCESS:
			return {
				...state,
				loading: action.payload.loading,
				test: action.payload.test,
			};
		default:
			return state;
	}
}
