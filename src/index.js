import React from 'react';
import ReactDOM from 'react-dom';
import Sections from './App';
import './main.css';
import './fonts.css';
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Sections />
		</Provider>
	</React.StrictMode>,
	document.body
);

