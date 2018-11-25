import React, { Component } from 'react';
import './Item.css';
import { Tooltip } from 'react-bootstrap';



class Item extends Component {
	constructor(props){
		super(props);

		this.state = {
			tooltip: false
		};
	}

	render() {
		return (
			<div onClick={this.props.showTooltip}>
				{this.props.tooltip ? (
					<Tooltip placement="left" className="in" id="tooltip-left">
						{this.props.description}
					</Tooltip>
				) : null}

				<div className="item">
					{this.props.title}
					<button
						className="btn btn-success"
						data-toggle="modal"
						data-target="#lookModal"
						onClick={this.props.showLookModal}
					>
						Look
					</button>
					<button className="btn btn-primary">Edit</button>
					<button className="btn btn-danger" onClick={this.props.delete}>
						Delete
					</button>
				</div>
			</div>
		);
	}
}

export default Item;