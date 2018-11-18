import React, { Component } from 'react';
import './style/App.css';
import List from './components/List/List';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="todo-container">
					<List />
				</div>
			</div>
		);
	}
}

export default App;
