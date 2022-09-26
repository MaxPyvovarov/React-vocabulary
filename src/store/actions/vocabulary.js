import {TEST_REDUX} from './actionTypes';

export function testRedux() {
	console.log('action');
	return {
		type: TEST_REDUX,
		pair: {id: Date.now(), eng: 'cat', ukr: 'кот'},
	};
}
