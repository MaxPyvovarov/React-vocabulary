import {ADD_NEW_WORD} from './actionTypes';

export function addNewWord(eng, ukr) {
	return {
		type: ADD_NEW_WORD,
		payload: {id: Date.now(), eng: eng, ukr: ukr},
	};
}
