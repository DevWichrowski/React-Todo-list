import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './AddButton.css';

export default function AddButton(props) {
	return (
		<div>
			<span id="add-icon" onClick={props.handlerAddModal}>
				<i className="fas fa-plus-circle" />
			</span>
			{props.showAddModal ? (
				<div className="static-modal">
					<Modal.Dialog>
						<Modal.Header>
							<Modal.Title>New task title</Modal.Title>
						</Modal.Header>
						<input type="text" className="form-control" onChange={props.saveTitle} />
						<Modal.Body>Task description</Modal.Body>

						<textarea type="text" className="form-control" onChange={props.saveDescription} />
						<Modal.Footer>
							<Button onClick={props.closeAddModal}>Close</Button>
							<Button bsStyle="primary" onClick={props.addItemToList}>
								Add task
							</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</div>
			) : null}
		</div>
	);
}
