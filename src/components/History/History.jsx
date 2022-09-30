import React from 'react';
import Navbar from '../Navbar/Navbar';
import HistoryList from './HistoryList/HistoryList';
import {connect} from 'react-redux';

import styles from './History.module.scss';

function History({history}) {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<h3 className={styles.heading}>Історія тестів</h3>
				{history.length > 0 ? (
					<HistoryList />
				) : (
					<p className={styles.warning}>Ви не пройшли жодного тесту</p>
				)}
			</div>
		</>
	);
}

function mapStateToProps(state) {
	return {
		history: state.vocabulary.history,
	};
}

export default connect(mapStateToProps)(History);
