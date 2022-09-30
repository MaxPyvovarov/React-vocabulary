import React from 'react';
import AnswersListItem from './AnswersListItem/AnswersListItem';

import styles from './AnswersList.module.scss';

export default function AnswersList({answers}) {
	return (
		<ul className={styles.answersList}>
			{answers.map((answer, index) => (
				<AnswersListItem key={index} answer={answer} />
			))}
		</ul>
	);
}
