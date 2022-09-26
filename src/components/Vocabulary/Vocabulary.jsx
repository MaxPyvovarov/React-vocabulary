import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {testRedux} from '../../store/actions/vocabulary';

const Vocabulary = props => {
	console.log(props);
	return (
		<div>
			<p>Hello from vocabulary</p>
			<button onClick={props.testRedux}>Add new pair</button>
			{props.vocabulary.map(pair => (
				<p key={pair.id}>
					{pair.eng} --- {pair.ukr}
				</p>
			))}
			<br></br>
			<NavLink to='/add'>Go to add page</NavLink>
		</div>
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
