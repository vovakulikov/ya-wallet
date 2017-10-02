import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components';

//ReactDOM.render(<App />, document.getElementById('root'));

export default class WrapApp extends React.Component {
	render() {
		return (<App />)
	}
}
