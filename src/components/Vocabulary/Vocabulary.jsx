import React from 'react';
import {NavLink} from 'react-router-dom';
import WordList from '../WordList/WordList';
import Navbar from '../Navbar/Navbar';
import AddIcon from '../UI/AddIcon';

import styles from './Vocabulary.module.scss';

export default function Vocabulary() {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<NavLink to='/add' className={styles.add}>
					<AddIcon />
					Add new word
				</NavLink>
				<WordList />
			</div>
		</>
	);
}
