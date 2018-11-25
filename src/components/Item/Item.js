import React from 'react';
import './Item.css';
import { Tooltip } from 'react-bootstrap';

export default function Item(props) {
	return (
		<div onClick={props.showTooltip}>
			{props.tooltip ? (
				<Tooltip placement="left" className="in" id="tooltip-left">
					{props.description}
				</Tooltip>
			) : null}

			<div className="item">
				{props.title}
				<button
					className="btn btn-success"
					data-toggle="modal"
					data-target="#lookModal"
					onClick={props.showLookModal}
				>
					Look
				</button>
				<button className="btn btn-primary">Edit</button>
				<button className="btn btn-danger" onClick={props.delete}>
					Delete
				</button>
			</div>
		</div>
	);
}
