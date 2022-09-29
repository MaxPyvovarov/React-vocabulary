import React from 'react';
import {NavLink} from 'react-router-dom';
import WordList from '../WordList/WordList';
import Navbar from '../Navbar/Navbar';
import AddIcon from '../UI/AddIcon/AddIcon';
import {connect} from 'react-redux';

import styles from './Vocabulary.module.scss';

function Vocabulary(props) {
	const wordsQuantity = props.words.length;

	const getCounterMessage = quantity => {
		return (
			quantity > 0 && (
				<p className={styles.counter}>
					Кількість слів: <span className={styles.number}>{quantity}</span>
					{quantity < 10
						? `. Додайте ще ${10 - quantity} щоб пройти Ваш перший тест!`
						: '. Так тримати!'}
				</p>
			)
		);
	};
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.header}>
					<NavLink to='/add' className={styles.add}>
						<AddIcon />
						Додати слово
					</NavLink>
					{getCounterMessage(wordsQuantity)}
				</div>
				{wordsQuantity > 0 ? (
					<WordList />
				) : (
					<p className={styles.warning}>Ваш словник порожній :(</p>
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
