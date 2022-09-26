import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './Navbar.module.scss';

export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li className={styles.listItem}>
					<NavLink to='/add'>Add new word</NavLink>
				</li>
			</ul>
		</div>
	);
}
