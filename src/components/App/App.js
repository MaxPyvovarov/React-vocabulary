import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Vocabulary from '../Vocabulary/Vocabulary';
import Add from '../Add/Add';
import Test from '../Test/Test';

import styles from './App.module.scss';
import Results from '../Results/Results';

function App() {
	return (
		<div className={styles.bg}>
			<BrowserRouter>
				<Routes>
					<Route path='/' exact element={<Vocabulary />}></Route>
					<Route path='/add' exact element={<Add />}></Route>
					<Route path='/test' exact element={<Test />}></Route>
					<Route path='/results' exact element={<Results />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
