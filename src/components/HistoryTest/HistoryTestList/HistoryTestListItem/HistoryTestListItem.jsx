import React from 'react';

import styles from './HistoryTestListItem.module.scss';

export default function HistoryTestListItem({question}) {
	console.log(question.rightAnswer);
	return (
		<li>
			<div className={styles.listItem + ' ' + styles[question.status]}>
				<span>{question.question}</span>
				<span>{question.answer}</span>
				<span>{question.rightAnswer}</span>
			</div>
		</li>
	);
}
