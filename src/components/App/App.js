import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Vocabulary from '../Vocabulary/Vocabulary';
import Add from '../Add/Add';
import Test from '../Test/Test';
import History from '../History/History';
import Results from '../Results/Results';

import styles from './App.module.scss';
import HistoryTest from '../HistoryTest/HistoryTest';

function App() {
	return (
		<div className={styles.bg}>
			<BrowserRouter>
				<Routes>
					<Route path='/' exact element={<Vocabulary />}></Route>
					<Route path='/add' exact element={<Add />}></Route>
					<Route path='/test' exact element={<Test />}></Route>
					<Route path='/results' exact element={<Results />}></Route>
					<Route path='/history' exact element={<History />}></Route>
					<Route
						path='/history/view/:id'
						exact
						element={<HistoryTest />}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
