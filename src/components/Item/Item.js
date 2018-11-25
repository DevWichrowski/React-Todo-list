import React from 'react';
import './Item.css';
import { Button, Modal } from 'react-bootstrap';

export default function Item(props) {
	return (
		<div className="item">
			{props.title}
			<button className="btn btn-success" data-toggle="modal" data-target="#lookModal" onClick={props.showLookModal} >
				Look
			</button>
			<button className="btn btn-primary">Edit</button>
			<button className="btn btn-danger" onClick={props.delete}>
				Delete
			</button>
			{props.lookModal ? (
				<div className="static-modal">
					<Modal.Dialog>
						<Modal.Header>
							<Modal.Title>{props.title}</Modal.Title>
						</Modal.Header>
						<Modal.Body>{props.description}</Modal.Body>
						<Modal.Footer>
							<Button onClick={props.closeLookModal}>Close</Button>
							<Button bsStyle="primary">Add task</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</div>
			) : null}
		</div>
	);
}
