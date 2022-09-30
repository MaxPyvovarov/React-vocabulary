import React from 'react';
import {connect} from 'react-redux';

function HistoryTest({activeHistoryTest}) {
	return <div>id: {activeHistoryTest}</div>;
}

function mapStateToProps(state) {
	return {
		activeHistoryTest: state.vocabulary.activeHistoryTest,
	};
}

export default connect(mapStateToProps)(HistoryTest);
