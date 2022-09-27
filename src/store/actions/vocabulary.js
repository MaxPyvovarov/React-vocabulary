import {ADD_NEW_WORD} from './actionTypes';

export function testRedux() {
	return {
		type: ADD_NEW_WORD,
		pair: {id: Date.now(), eng: 'cat', ukr: 'кот'},
	};
}
