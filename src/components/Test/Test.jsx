import React, {useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import ActiveTest from '../ActiveTest/ActiveTest';
import {connect} from 'react-redux';
import {generateTest} from '../../store/actions/vocabulary';
import Loader from '../UI/Loader/Loader';

import styles from './Test.module.scss';

function Test(props) {
	useEffect(() => {
		props.generateTest(props.vocabulary);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<p className={styles.question}>
					<span></span>
				</p>
				{props.loading || !props.test ? (
					<Loader />
				) : (
					<ActiveTest test={props.test} activeQuestion={props.activeQuestion} />
				)}
			</div>
		</>
	);
}

function mapStateToProps(state) {
	return {
		vocabulary: state.vocabulary.vocabulary,
		test: state.vocabulary.test,
		loading: state.vocabulary.loading,
		activeQuestion: state.vocabulary.activeQuestion,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		generateTest: vocabulary => dispatch(generateTest(vocabulary)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
