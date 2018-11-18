import React, { Component } from 'react';
import './style/App.css';
import List from './components/List/List';
import Details from './components/Details/Details';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>ToDo List</h1>
				<div className="todo-container">
        <div className="list-component">
					<List />
          a
          </div>
          <div className="details-component">
					<Details />
          </div>
				</div>
			</div>
		);
	}
}

export default App;
