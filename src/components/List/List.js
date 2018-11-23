import React, { Component } from 'react';
import './List.css';
import Item from '../Item/Item';
import { Modal, Button } from 'react-bootstrap/lib';

export default class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Items: [
				{
					title: 'Test task',
					desc: ''
				}
			],
			tempTitle: '',
			tempDesc: '',
			showModal: false
		};
	}
	saveTitle = (event) => {
		this.setState({ tempTitle: event.target.value });
	};

	saveDescription = (event) => {
		this.setState({ tempDescription: event.target.value });
	};

	addItemToList = () => {
		this.setState({
			Items: [ ...this.state.Items, { title: this.state.tempTitle, description: this.state.tempDesc } ]
		});
	};

	showItem = () => {
		this.setState({ showModal: true });
	};

	hideItem = () => {
		this.setState({ showModal: false });
	};

	deleteItemFromList = (index) => {
		const listArray = this.state.Items;
		listArray.splice(index, 1);
		this.setState({ Items: listArray });
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
							delete={() => this.deleteItemFromList(index)}
							show={() => this.showItem()}
							hide={() => this.hideItem()}
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
				{this.state.showModal ? (
					<div className="static-modal">
						<Modal.Dialog>
							<Modal.Header>
								<Modal.Title>Modal title</Modal.Title>
							</Modal.Header>

							<Modal.Body>One fine body...</Modal.Body>

							<Modal.Footer>
								<Button onClick={this.hideItem}>Zamknij</Button>
							</Modal.Footer>
						</Modal.Dialog>
					</div>
				) : null}
				<span id="add-icon">
					<i
						className="fas fa-plus-circle"
						data-toggle="modal"
						data-target="#exampleModal"
						data-whatever="@mdo"
					/>
				</span>
				<div
					className="modal fade"
					id="exampleModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Dodaj swój nowy task
								</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label htmlFor="tytul" className="col-form-label">
											Tytul:
										</label>
										<input
											type="text"
											className="form-control"
											id="tytul"
											onChange={this.saveTitle}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="description" className="col-form-label">
											Opis:
										</label>
										<textarea
											className="form-control"
											id="description"
											onChange={this.saveDescription}
										/>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">
									Zamknij
								</button>
								<button type="button" className="btn btn-primary" onClick={this.addItemToList}>
									Dodaj task
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
