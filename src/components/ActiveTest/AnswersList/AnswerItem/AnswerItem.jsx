import React from 'react';

import styles from './AnswerItem.module.scss';

export default function AnswerItem({answer}) {
	return <li className={styles.answer}>{answer}</li>;
}
