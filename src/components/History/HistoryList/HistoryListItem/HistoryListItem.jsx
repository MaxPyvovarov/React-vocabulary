import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectHistoryTest} from '../../../../store/actions/vocabulary';

import styles from './HistoryListItem.module.scss';

function HistoryListItem({test, index, selectHistoryTest}) {
	return (
		<li>
			<NavLink
				to={'/history/view/' + (index + 1)}
				className={styles.listItem}
				onClick={() => selectHistoryTest(index)}
			>
				<span>Тест №{index + 1}</span>
				<span>
					Результат: &nbsp;
					{test.filter(answer => answer.status === 'right').length * 10}%
				</span>
			</NavLink>
		</li>
	);
}

function mapDispatchToProps(dispatch) {
	return {
		selectHistoryTest: id => dispatch(selectHistoryTest(id)),
	};
}

export default connect(null, mapDispatchToProps)(HistoryListItem);
