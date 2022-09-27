import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './Navbar.module.scss';

export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<ul className={styles.list}>
				<li>
					<NavLink to='/' className={styles.listItem}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/exam' className={styles.listItem}>
						Take a test
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
