import {
	ADD_NEW_WORD,
	CREATE_TEST_START,
	CREATE_TEST_SUCCESS,
	SELECT_ANSWER_SUCCESS,
	SELECT_ANSWER_WRONG,
	FINISH_TEST,
	SELECT_HISTORY_TEST,
} from '../actions/actionTypes';

const initialState = {
	words: [
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
	results: [],
	history: [],
	isFinished: false,
	loading: false,
	activeQuestion: 0,
	test: null,
	activeHistoryTest: null,
};

export default function vocabularyReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_NEW_WORD:
			return {
				...state,
				words: [...state.vocabulary, action.payload],
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
				activeQuestion: 0,
				isFinished: false,
				results: [],
			};
		case SELECT_ANSWER_SUCCESS:
			return {
				...state,
				activeQuestion: state.activeQuestion + 1,
				results: [...state.results, action.payload],
			};
		case SELECT_ANSWER_WRONG:
			return {
				...state,
				activeQuestion: state.activeQuestion + 1,
				results: [...state.results, action.payload],
			};
		case FINISH_TEST:
			return {
				...state,
				isFinished: true,
				history: [...state.history, state.results],
			};
		case SELECT_HISTORY_TEST:
			return {
				...state,
				activeHistoryTest: action.payload,
			};
		default:
			return state;
	}
}
