import React, { Component } from 'react';
import './List.css';
import Item from '../Item/Item';

export default class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Items: [
				{
					title: 'test',
					description: 'description'
				},
				{
					title: 'tes2',
					description: 'descriptio2'
				}
			]
		};
	}
	saveTitle = () => {};

	saveDescription = () => {};

	addItemToList = () => {
		this.setState({
			Items: [...this.state.Items, {title: 'test3', description: 'desc3'}]
		  })
	};

	render() {
		let list = null;

		list = (
			<div>
				{this.state.Items.map((item, index) => {
					return (
						<Item
							title={item.title}
							description={item.description}
							key={index}
							testo={[ ...this.state.Items ]}
						/>
					);
				})}
			</div>
		);
		return (
			<div>
				<div className="list">
					<div className="list-heading">
						<h4>Lista to-do</h4>
						<hr />
						<div className="item-list">{list}</div>
					</div>
				</div>
				<div className="add-item-button">
					<input
						type="text"
						className="form-control"
						placeholder="Tytul"
						aria-label="Tytul"
						aria-describedby="basic-addon1"
					/>
					<input
						type="text"
						className="form-control"
						placeholder="Opis"
						aria-label="Opis"
						aria-describedby="basic-addon1"
					/>
					<button onClick={this.addItemToList}>Dodaj</button>
				</div>
			</div>
		);
	}
}
