import React from 'react';
import {connect} from 'react-redux';
import {addNewWord} from '../../store/actions/vocabulary';
import {NavLink} from 'react-router-dom';
import WordList from '../WordList/WordList';
import Navbar from '../Navbar/Navbar';
import AddIcon from '../UI/AddIcon';

import styles from './Vocabulary.module.scss';

const Vocabulary = props => {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<NavLink to='/add' className={styles.add}>
					<AddIcon />
					Add new word
				</NavLink>
				<button className={styles.add} onClick={props.addNewWord}>
					Add new word
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
		addNewWord: () => dispatch(addNewWord()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Vocabulary);
