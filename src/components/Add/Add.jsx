import React, {useState} from 'react';
import Navbar from '../Navbar/Navbar';
import {connect} from 'react-redux';

import styles from './Add.module.scss';
import {addNewWord} from '../../store/actions/vocabulary';

function Add(props) {
	const [eng, setEng] = useState('');
	const [ukr, setUkr] = useState('');

	function submitHandler(e) {
		e.preventDefault();
		console.log('form', eng, ukr);
		props.addNewWord(eng, ukr);
	}

	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<h2 className={styles.heading}>Add a new word to your vocabulary</h2>
				<form className={styles.form} onSubmit={submitHandler}>
					<div className={styles.inputWrapper}>
						<label htmlFor='engInput'>English translation</label>
						<input
							type='text'
							id='engInput'
							placeholder='New word...'
							value={eng}
							onChange={e => setEng(e.target.value)}
						/>
					</div>
					<div className={styles.inputWrapper}>
						<label htmlFor='ukrInput'>Ukrainian translation</label>
						<input
							type='text'
							id='ukrInput'
							placeholder='New word...'
							value={ukr}
							onChange={e => setUkr(e.target.value)}
						/>
					</div>
					<button className={styles.submitBtn}>Save</button>
				</form>
			</div>
		</>
	);
}

function mapDispatchToProps(dispatch) {
	return {
		addNewWord: (eng, ukr) => dispatch(addNewWord(eng, ukr)),
	};
}

export default connect(null, mapDispatchToProps)(Add);
