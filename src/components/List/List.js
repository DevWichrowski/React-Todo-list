import React, { Component } from 'react';
import './List.css';
import Item from '../Item/Item';
import AddItemButton from '../AddItemButton/AddItemButton';

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
	render() {
		let list = null;

		list = (
			<div>
				{this.state.Items.map((item, map) => {
					return <Item title={item.title} description={item.description} />;
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
					<AddItemButton />
				</div>
			</div>
		);
	}
}
