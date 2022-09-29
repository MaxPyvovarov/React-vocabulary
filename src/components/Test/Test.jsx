import React from 'react';
import Navbar from '../Navbar/Navbar';
import ActiveTest from '../ActiveTest/ActiveTest';
import {connect} from 'react-redux';

import styles from './Test.module.scss';
import {generateTest} from '../../store/actions/vocabulary';

function Test(props) {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<p className={styles.question}>
					<span></span>
				</p>
				<ActiveTest test={props.test} />
				<button onClick={() => props.generateTest(props.vocabulary)}>
					Create test
				</button>
			</div>
		</>
	);
}

function mapStateToProps(state) {
	return {
		vocabulary: state.vocabulary.vocabulary,
		test: state.vocabulary.test,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		generateTest: vocabulary => dispatch(generateTest(vocabulary)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
