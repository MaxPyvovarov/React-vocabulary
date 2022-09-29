import React from 'react';

import styles from './Loader.module.scss';

export default function Loader() {
	return (
		<div className={styles.center}>
			<div className={styles.Loader}>
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	);
}
