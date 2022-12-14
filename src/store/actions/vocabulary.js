import {
	ADD_NEW_WORD,
	CREATE_TEST_START,
	CREATE_TEST_SUCCESS,
	SELECT_ANSWER_SUCCESS,
	SELECT_ANSWER_WRONG,
	FINISH_TEST,
	SELECT_HISTORY_TEST,
} from './actionTypes';

export function addNewWord(eng, ukr) {
	return {
		type: ADD_NEW_WORD,
		payload: {id: Date.now(), eng: eng, ukr: ukr},
	};
}

export function generateTest(vocabulary) {
	return async dispatch => {
		dispatch(createTestStart());
		const test = [];
		const wordsMap = [...vocabulary];

		const options = [];
		for (let i = 0; i < vocabulary.length; i++) {
			options.push(vocabulary[i].ukr);
		}

		function getRandomList(array, word) {
			const newArray = [...array];
			const randomNumber = Math.floor(Math.random() * 10);
			const result = [];
			result.push(word);
			newArray.splice(newArray.indexOf(word), 1);
			for (let i = 0; i < 3; i++) {
				result.push(
					newArray
						.splice(newArray.indexOf(newArray[randomNumber]), 1)
						.toString()
				);
			}

			return result.sort(() => 0.5 - Math.random());
		}

		for (let i = 0; i < 10; i++) {
			const word = wordsMap[Math.floor(Math.random() * wordsMap.length)];
			wordsMap.splice(wordsMap.indexOf(word), 1);
			test.push({
				question: word.eng,
				rightAnswer: word.ukr,
				answers: getRandomList(options, word.ukr),
				answer: '',
				status: '',
			});
		}

		dispatch(createTestSuccess(test));
	};
}

export function createTestStart() {
	return {
		type: CREATE_TEST_START,
		payload: {
			loading: true,
		},
	};
}

export function createTestSuccess(test) {
	return {
		type: CREATE_TEST_SUCCESS,
		payload: {
			loading: false,
			test,
		},
	};
}

export function selectAnswer(question, activeQuestion, answer) {
	return async dispatch => {
		question.answer = answer;
		if (answer === question.rightAnswer) {
			question.status = 'right';
			dispatch(selectAnswerSuccess(question));
		} else {
			question.status = 'wrong';
			dispatch(selectAnswerWrong(question));
		}
		if (activeQuestion >= 9) {
			dispatch(finishTest());
		}
	};
}

export function selectAnswerSuccess(question) {
	return {
		type: SELECT_ANSWER_SUCCESS,
		payload: question,
	};
}

export function selectAnswerWrong(question) {
	return {
		type: SELECT_ANSWER_WRONG,
		payload: question,
	};
}

export function finishTest() {
	return {
		type: FINISH_TEST,
	};
}

export function selectHistoryTest(id) {
	return {
		type: SELECT_HISTORY_TEST,
		payload: id,
	};
}
