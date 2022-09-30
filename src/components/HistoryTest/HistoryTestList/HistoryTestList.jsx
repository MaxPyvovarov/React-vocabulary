import React from 'react';
import {connect} from 'react-redux';
import HistoryTestListItem from './HistoryTestListItem/HistoryTestListItem';

function HistoryTestList({history}) {
	return (
		<ul>
			{history.map((question, index) => (
				<HistoryTestListItem question={question} key={index} />
			))}
		</ul>
	);
}

function mapStateToProps(state) {
	return {
		history: state.vocabulary.history[state.vocabulary.activeHistoryTest],
	};
}

export default connect(mapStateToProps)(HistoryTestList);
