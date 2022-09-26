import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Vocabulary from '../Vocabulary/Vocabulary';
import Add from '../Add/Add';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact element={<Vocabulary />}></Route>
				<Route path='/add' exact element={<Add />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
