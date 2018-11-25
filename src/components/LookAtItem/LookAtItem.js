import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './LookAtItem.css';

export default function LookAtItem(props) {
	return (
		<div className="look-at-item">
			{props.modal ? (
				<div className="static-modal">
					<Modal.Dialog>
						<Modal.Header>
							<Modal.Title>{props.title}</Modal.Title>
						</Modal.Header>

						<Modal.Body>{props.description}</Modal.Body>

						<Modal.Footer>
							<Button onClick={props.showModalHandler}>Close</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</div>
			) : null}
		</div>
	);
}
