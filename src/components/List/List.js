import React, { Component } from 'react';
import './List.css';
import Item from '../Item/Item';
import AddButton from '../AddButton/AddButton';

export default class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Items: [
				{
					title: 'Go shopping',
					desc: 'Go shopping and buy new shoes and vegetables'
				},
				{
					title: 'Clear car',
					desc: 'Remember to clear car and take care about wheels'
				}
			],
			tempTitle: '',
			tempDesc: '',
			showAddModal: false
		};
	}
	saveTitle = (event) => {
		this.setState({ tempTitle: event.target.value });
	};

	saveDescription = (event) => {
		this.setState({ tempDesc: event.target.value });
	};

	addItemToList = () => {
		this.setState({
			Items: [ ...this.state.Items, { title: this.state.tempTitle, desc: this.state.tempDesc } ]
		});
	};

	deleteItemFromList = (index) => {
		const listArray = this.state.Items;
		listArray.splice(index, 1);
		this.setState({ Items: listArray });
	};

	showAddModal = () => {
		this.setState({ showAddModal: true });
	};

	closeAddModal = () => {
		this.setState({ showAddModal: false });
	};

	render() {
		let list = null;

		list = (
			<div>
				{this.state.Items.map((item, index) => {
					return (
						<Item
							title={item.title}
							description={item.desc}
							key={index}
							delete={() => this.deleteItemFromList(index)}
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
				<div>
					<AddButton
						handlerAddModal={this.showAddModal}
						showAddModal={this.state.showAddModal}
						closeAddModal={this.closeAddModal}
						saveTitle={this.saveTitle}
						saveDescription={this.saveDescription}
						addItemToList={this.addItemToList}
					/>
				</div>
			</div>
		);
	}
}
