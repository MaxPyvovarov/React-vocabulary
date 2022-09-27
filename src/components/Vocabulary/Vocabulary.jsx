import React from 'react';
import {NavLink} from 'react-router-dom';
import WordList from '../WordList/WordList';
import Navbar from '../Navbar/Navbar';
import AddIcon from '../UI/AddIcon';
import {connect} from 'react-redux';

import styles from './Vocabulary.module.scss';

function Vocabulary(props) {
	const wordsQuantity = props.words.length;
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.header}>
					<NavLink to='/add' className={styles.add}>
						<AddIcon />
						Add new word
					</NavLink>
					{wordsQuantity > 0 && (
						<p className={styles.counter}>
							You have {wordsQuantity} word(s) in your vocabulary! Keep going!
						</p>
					)}
				</div>
				{wordsQuantity > 0 ? (
					<WordList />
				) : (
					<p className={styles.warning}>You have not added any words yet</p>
				)}
			</div>
		</>
	);
}

function mapStateToProps(state) {
	return {
		words: state.vocabulary.vocabulary,
	};
}

export default connect(mapStateToProps)(Vocabulary);
