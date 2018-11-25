import React, { Component } from 'react';
import './List.css';
import Item from '../Item/Item';
import { Button, Modal } from 'react-bootstrap';

export default class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Items: [
				{
					title: 'Test task',
					desc: 'sdfsdfsfsdfsdfsd'
				},
				{
					title: 'test 2',
					desc: 'description2'
				}
			],
			tempTitle: '',
			tempDesc: '',
			showAddModal: false,
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

	showTooltip = (index) => {
		this.setState({ tooltip: !this.state.tooltip });
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
				<span id="add-icon">
					<i className="fas fa-plus-circle" onClick={this.showAddModal} />
				</span>
				{this.state.showAddModal ? (
					<div className="static-modal">
						<Modal.Dialog>
							<Modal.Header>
								<Modal.Title>New task title</Modal.Title>
							</Modal.Header>
							<input type="text" className="form-control" onChange={this.saveTitle} />
							<Modal.Body>Task description</Modal.Body>

							<textarea type="text" className="form-control" maxlength="50" onChange={this.saveDescription} />
							<Modal.Footer>
								<Button onClick={this.closeAddModal}>Close</Button>
								<Button bsStyle="primary" onClick={this.addItemToList}>
									Add task
								</Button>
							</Modal.Footer>
						</Modal.Dialog>
					</div>
				) : null}
			</div>
		);
	}
}
