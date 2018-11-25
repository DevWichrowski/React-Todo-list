import React from 'react'
import { Modal, Button } from 'react-bootstrap';

export default function EditItem(props) {
  return (
    <div>
    {props.edit ? (
        <div className="static-modal">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Edit task</Modal.Title>
                </Modal.Header>
                <div className="current-task">
                    <p>
                        <strong>Current title: </strong>
                    </p>
                    <p>{props.title}</p>
                    <p>
                        <strong>Current description:</strong>
                    </p>
                    <p>{props.description}</p>
                </div>
                <Modal.Body>Please enter new description below:</Modal.Body>
                <label htmlFor="new-title">Please enter new title:</label>
                <input
                    type="text"
                    className="form-control"
                    id="new-title"
                    onChange={props.saveTitle}
                />
                <label htmlFor="new-description">Please enter new description:</label>
                <textarea id="new-description" onChange={props.saveDescription} />
                <Modal.Footer>
                    <Button onClick={props.handleEditItem}>Close</Button>
                    <Button bsStyle="primary" onClick={props.editItem}>
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    ) : null}
</div>
  )
}
