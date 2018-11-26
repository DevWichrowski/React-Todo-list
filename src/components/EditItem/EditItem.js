import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './EditItem.css';

export default function EditItem(props) {
	return (
		<div className="edit-item">
			{props.edit ? (
				<div className="static-modal">
					<Modal.Dialog>
						<Modal.Header>
							<Modal.Title>Edit task</Modal.Title>
						</Modal.Header>
						<p>Please enter new title:</p>
						<input
							type="text"
							className="form-control"
							id="new-title"
							onChange={props.saveTitle}
							maxLength="75"
						/>
						<p>Please enter new description:</p>
						<textarea id="new-description" onChange={props.saveDescription} maxLength="1000" />
						<Modal.Footer>
							<Button onClick={props.handleEditItem}>Close</Button>
							{props.tempTitle !== '' ? (
								<Button bsStyle="primary" onClick={props.editItem}>
									Save changes
								</Button>
							) : (
								<Button bsStyle="primary" disabled>
									Save changes
								</Button>
							)}
						</Modal.Footer>
					</Modal.Dialog>
				</div>
			) : null}
		</div>
	);
}
