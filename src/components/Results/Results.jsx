import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {generateTest} from '../../store/actions/vocabulary';

import styles from './Results.module.scss';

function Results({results, vocabulary, generateTest}) {
	return (
		<div className={styles.results}>
			<h3 className={styles.heading}>Ваш результат</h3>
			<p>{results * 10}%</p>
			<div className={styles.buttons}>
				<button onClick={() => generateTest(vocabulary)}>
					Спробувати ще раз
				</button>
				<NavLink to='/'>На головну</NavLink>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		results: state.vocabulary.results,
		vocabulary: state.vocabulary.vocabulary,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		generateTest: vocabulary => dispatch(generateTest(vocabulary)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
