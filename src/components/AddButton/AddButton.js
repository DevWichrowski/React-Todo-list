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
						<input type="text" className="form-control" onChange={props.saveTitle} maxLength="56" />
						<Modal.Body>Task description</Modal.Body>

						<textarea
							type="text"
							className="form-control"
							onChange={props.saveDescription}
							maxLength="1000"
						/>
						<Modal.Footer>
							<Button onClick={props.closeAddModal}>Close</Button>
							{props.tempTitle !== '' ? (
								<Button bsStyle="primary" onClick={props.addItemToList}>
									Add task
								</Button>
							) : (
								<Button bsStyle="primary" disabled>
									Add task
								</Button>
							)}
						</Modal.Footer>
					</Modal.Dialog>
				</div>
			) : null}
		</div>
	);
}
