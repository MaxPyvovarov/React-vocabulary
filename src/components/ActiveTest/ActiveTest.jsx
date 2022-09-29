import React from 'react';
import AnswersList from './AnswersList/AnswersList';

import styles from './ActiveTest.module.scss';

export default function ActiveTest({test, activeQuestion}) {
	return (
		<div className={styles.activeTest}>
			<p className={styles.question}>
				<span>
					Як перевести слово &nbsp;
					<span className={styles.colored}>
						{test[activeQuestion].question}
					</span>
					&nbsp;?
				</span>
				<span className={styles.counter}>
					<span className={styles.colored}>{activeQuestion + 1}</span> із{' '}
					{test.length}
				</span>
			</p>
			<AnswersList answers={test[activeQuestion].answers} />
		</div>
	);
}
