import React from 'react';
import './Item.css';

export default function Item(props) {
	return (
		<div className="item">
			{props.title}
			<button className="btn btn-success" data-toggle="modal" data-target="#lookModal" onClick={props.show}>
				Look
			</button>
			<button className="btn btn-primary">Edit</button>
			<button className="btn btn-danger" onClick={props.delete}>
				Delete
			</button>

			<div>
				<div
					className="modal fade"
					id="lookModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									{props.title}
								</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">{props.description}</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
									onClick={props.hide}
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
