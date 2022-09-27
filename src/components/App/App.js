import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Vocabulary from '../Vocabulary/Vocabulary';
import Add from '../Add/Add';
import Exam from '../Exam/Exam';

import styles from './App.module.scss';

function App() {
	return (
		<div className={styles.bg}>
			<BrowserRouter>
				<Routes>
					<Route path='/' exact element={<Vocabulary />}></Route>
					<Route path='/add' exact element={<Add />}></Route>
					<Route path='/exam' exact element={<Exam />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
