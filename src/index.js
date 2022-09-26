import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App/App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
reportWebVitals();
