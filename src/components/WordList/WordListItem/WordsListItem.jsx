import React from 'react';

import styles from './WordsListItem.module.scss';

export default function WordListItem({word}) {
	return (
		<div className={styles.pair}>
			<span>{word.eng}</span>
			<span>{word.ukr}</span>
		</div>
	);
}
