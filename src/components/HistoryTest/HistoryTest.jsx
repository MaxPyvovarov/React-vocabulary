import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import styles from './HistoryTest.module.scss';
import HistoryTestList from './HistoryTestList/HistoryTestList';

function HistoryTest() {
	return (
		<>
			<div className={styles.nav}>
				<NavLink to='/history'>Назад</NavLink>
			</div>
			<div className={styles.container}>
				<div className={styles.heading}>
					<span>Питання</span>
					<span>Ваша відповідь</span>
					<span>Правильна відповідь</span>
				</div>
				<HistoryTestList />
			</div>
		</>
	);
}

function mapStateToProps(state) {
	return {
		history: state.vocabulary.history[state.vocabulary.activeHistoryTest],
	};
}

export default connect(mapStateToProps)(HistoryTest);
