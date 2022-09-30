import React from 'react';
import {connect} from 'react-redux';
import WordListItem from './WordListItem/WordsListItem';

import styles from './WordList.module.scss';

function WordsList({words}) {
	return (
		<div>
			<div className={styles.languages}>
				<span>English</span>
				<span>Ukrainian</span>
			</div>
			{words.map(word => (
				<WordListItem key={word.id} word={word} />
			))}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		words: state.vocabulary.words,
	};
}

export default connect(mapStateToProps)(WordsList);
