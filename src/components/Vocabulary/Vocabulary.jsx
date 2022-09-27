import React from 'react';
import {connect} from 'react-redux';
import {testRedux} from '../../store/actions/vocabulary';
import WordList from '../WordList/WordList';
import Navbar from '../Navbar/Navbar';

import styles from './Vocabulary.module.scss';

const Vocabulary = props => {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<button className={styles.add} onClick={props.testRedux}>
					Add new word +
				</button>
				<WordList />
			</div>
		</>
	);
};

function mapStateToProps(state) {
	return {
		vocabulary: state.vocabulary.vocabulary,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		testRedux: () => dispatch(testRedux()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Vocabulary);
