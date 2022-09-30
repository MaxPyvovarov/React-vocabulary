import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {generateTest} from '../../store/actions/vocabulary';

import styles from './Navbar.module.scss';

function Navbar({vocabulary, generateTest}) {
	return (
		<div className={styles.navbar}>
			<ul className={styles.list}>
				<li>
					<NavLink to='/' className={styles.listItem}>
						Головна
					</NavLink>
				</li>
				{vocabulary.length >= 10 && (
					<>
						<li>
							<NavLink
								to='/test'
								onClick={() => generateTest(vocabulary)}
								className={styles.listItem}
							>
								Повторити слова
							</NavLink>
						</li>
						<li>
							<NavLink to='/history' className={styles.listItem}>
								Історія тестів
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		vocabulary: state.vocabulary.words,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		generateTest: vocabulary => dispatch(generateTest(vocabulary)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
