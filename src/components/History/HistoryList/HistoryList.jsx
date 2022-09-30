import React from 'react';
import {connect} from 'react-redux';

import HistoryListItem from './HistoryListItem/HistoryListItem';

function HistoryList({history}) {
	return (
		<ul>
			{history.map((test, index) => (
				<HistoryListItem key={index} test={test} index={index} />
			))}
		</ul>
	);
}

function mapStateToProps(state) {
	return {
		history: state.vocabulary.history,
	};
}

export default connect(mapStateToProps)(HistoryList);
