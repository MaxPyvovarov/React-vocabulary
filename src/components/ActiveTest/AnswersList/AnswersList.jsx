import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';

import styles from './AnswersList.module.scss';

export default function AnswersList({answers}) {
	console.log(answers);
	return (
		<ul className={styles.answersList}>
			{answers.map((answer, index) => (
				<AnswerItem key={Date.now() + index} answer={answer} />
			))}
		</ul>
	);
}
