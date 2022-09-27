import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import styles from './Navbar.module.scss';

function Navbar(props) {
	console.log(props);
	return (
		<div className={styles.navbar}>
			<ul className={styles.list}>
				<li>
					<NavLink to='/' className={styles.listItem}>
						Home
					</NavLink>
				</li>
				{props.words.length >= 10 && (
					<li>
						<NavLink to='/exam' className={styles.listItem}>
							Take a test
						</NavLink>
					</li>
				)}
			</ul>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		words: state.vocabulary.vocabulary,
	};
}

export default connect(mapStateToProps)(Navbar);
