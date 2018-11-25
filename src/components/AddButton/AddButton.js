import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './AddButton.css';

class AddButton extends Component {
	render() {
		return (
			<div>
				<span id="add-icon" onClick={this.props.handlerAddModal}>
					<i className="fas fa-plus-circle" />
				</span>
				{this.props.showAddModal ? (
					<div className="static-modal">
						<Modal.Dialog>
							<Modal.Header>
								<Modal.Title>New task title</Modal.Title>
							</Modal.Header>
							<input type="text" className="form-control" onChange={this.props.saveTitle} />
							<Modal.Body>Task description</Modal.Body>

							<textarea type="text" className="form-control" onChange={this.props.saveDescription} />
							<Modal.Footer>
								<Button onClick={this.props.closeAddModal}>Close</Button>
								<Button bsStyle="primary" onClick={this.props.addItemToList}>
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

export default AddButton;
