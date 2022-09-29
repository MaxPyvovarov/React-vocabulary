import React from 'react';
import {connect} from 'react-redux';
import {selectAnswer} from '../../../../store/actions/vocabulary';

import styles from './AnswersListItem.module.scss';

function AnswersListItem({answer, question, selectAnswer, activeQuestion}) {
	return (
		<li
			className={styles.answer}
			onClick={() => selectAnswer(question, activeQuestion, answer)}
		>
			{answer}
		</li>
	);
}

function mapStateToProps(state) {
	return {
		question: state.vocabulary.test[state.vocabulary.activeQuestion],
		activeQuestion: state.vocabulary.activeQuestion,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		selectAnswer: (question, activeQuestion, answer) =>
			dispatch(selectAnswer(question, activeQuestion, answer)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswersListItem);
