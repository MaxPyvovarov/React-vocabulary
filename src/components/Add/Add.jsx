import React, {useState} from 'react';
import Navbar from '../Navbar/Navbar';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import styles from './Add.module.scss';
import {addNewWord} from '../../store/actions/vocabulary';

function Add(props) {
	const [eng, setEng] = useState('');
	const [ukr, setUkr] = useState('');
	const [isFormValid, setIsFormValid] = useState(true);
	const navigate = useNavigate();

	function submitHandler(e) {
		e.preventDefault();
		if (validateInputs()) {
			props.addNewWord(eng, ukr);
			setEng('');
			setUkr('');
			setIsFormValid(true);
			navigate('/');
		} else {
			setIsFormValid(false);
		}
	}

	function validateInputs() {
		return /^[a-zA-Z]+$/.test(eng.trim()) && /^[а-яієїґ']+$/gi.test(ukr.trim());
	}

	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<h2 className={styles.heading}>Додати нове слово у словник</h2>
				<form className={styles.form} onSubmit={submitHandler}>
					<div className={styles.inputWrapper}>
						<label htmlFor='engInput'>Англійський переклад</label>
						<input
							type='text'
							id='engInput'
							placeholder='Нове слово...'
							value={eng}
							onChange={e => setEng(e.target.value)}
							required
						/>
					</div>
					<div className={styles.inputWrapper}>
						<label htmlFor='ukrInput'>Український переклад</label>
						<input
							type='text'
							id='ukrInput'
							placeholder='Нове слово...'
							value={ukr}
							onChange={e => setUkr(e.target.value)}
							required
						/>
					</div>
					{isFormValid || (
						<span className={styles.error}>
							Перевірте коректність введених слів
						</span>
					)}
					<button className={styles.submitBtn}>Додати</button>
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
