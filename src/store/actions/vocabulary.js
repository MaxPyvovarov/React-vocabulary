import {ADD_NEW_WORD} from './actionTypes';

export function addNewWord() {
	return {
		type: ADD_NEW_WORD,
		payload: {id: Date.now(), eng: 'cat', ukr: 'кот'},
	};
}
