import React, { Component } from 'react';
import './Item.css';
import { Modal, Button } from 'react-bootstrap';

class Item extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modal: false,
			editItem: false
		};
	}

	handleModal = () => {
		this.setState({ modal: !this.state.modal });
	};

	handleEditItem = () => {
		this.setState({ editItem: !this.state.editItem });
	};

	render() {
		return (
			<div>
				<div className="item">
					{this.props.title}
					<button
						className="btn btn-success"
						data-toggle="modal"
						data-target="#lookModal"
						onClick={this.handleModal}
					>
						Look
					</button>
					<button className="btn btn-primary" onClick={this.handleEditItem}>Edit</button>
					<button className="btn btn-danger" onClick={this.props.delete}>
						Delete
					</button>
				</div>
				<div>
					{this.state.modal ? (
						<div className="static-modal">
							<Modal.Dialog>
								<Modal.Header>
									<Modal.Title>{this.props.title}</Modal.Title>
								</Modal.Header>

								<Modal.Body>{this.props.description}</Modal.Body>

								<Modal.Footer>
									<Button onClick={this.handleModal}>Close</Button>
								</Modal.Footer>
							</Modal.Dialog>
						</div>
					) : null}
				</div>
				<div>
					{this.state.editItem ? (
						<div className="static-modal">
							<Modal.Dialog>
								<Modal.Header>
									<Modal.Title>Please enter new title below:</Modal.Title>
								</Modal.Header>
								<input type="text" className="form-control"/>
								<Modal.Body>Please enter new description below:</Modal.Body>
									<textarea />
								<Modal.Footer>
									<Button onClick={this.handleEditItem}>Close</Button>
									<Button bsStyle="primary">Save changes</Button>
								</Modal.Footer>
							</Modal.Dialog>
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

export default Item;
