import React from 'react';
import {connect} from 'react-redux';
import {testRedux} from '../../store/actions/vocabulary';

import styles from './Vocabulary.module.scss';
import Navbar from '../Navbar/Navbar';

const Vocabulary = props => {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<p className={styles.greet}>Hello from vocabulary</p>
				<button onClick={props.testRedux}>Add new pair</button>
				{props.vocabulary.map(pair => (
					<p key={pair.id}>
						{pair.eng} --- {pair.ukr}
					</p>
				))}
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
