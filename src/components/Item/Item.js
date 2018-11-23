import React from 'react';
import './Item.css';
import { Modal, Button } from 'react-bootstrap/lib';

export default function Item(props) {
	return (
		<div className="item">
			{props.title}
			<button className="btn btn-success" onClick={props.show}>
				Look
			</button>
			<button className="btn btn-primary">Edit</button>
			<button className="btn btn-danger" onClick={props.delete}>
				Delete
			</button>

			{props.showModal ? (
				<div className="static-modal">
					<Modal.Dialog>
						<Modal.Header>
							<Modal.Title>{props.title}</Modal.Title>
						</Modal.Header>

						<Modal.Body>{props.description}</Modal.Body>

						<Modal.Footer>
							<Button onClick={props.hide}>Zamknij</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</div>
			) : null}
		</div>
	);
}
