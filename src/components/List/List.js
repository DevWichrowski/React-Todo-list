import React, { Component } from 'react';
import './List.css';
import Item from '../Item/Item';

export default class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Items: [],
			tempTitle: '',
			tempDesc: ''
		};
	}
	saveTitle = (event) => {
		this.setState({ tempTitle: event.target.value });
	};

	saveDescription = (event) => {
		this.setState({ tempDescription: event.target.value });
	};

	addItemToList = () => {
		this.setState({
			Items: [ ...this.state.Items, { title: this.state.tempTitle, description: this.state.tempDesc } ]
		});
	};

	render() {
		let list = null;

		list = (
			<div>
				{this.state.Items.map((item, index) => {
					return (
						<Item
							title={item.title}
							description={item.description}
							key={index}
							testo={[ ...this.state.Items ]}
						/>
					);
				})}
			</div>
		);
		return (
			<div>
				<div className="list">
					<div className="list-heading">
						<h4>Lista to-do</h4>
						<hr />
						<div className="item-list">{list}</div>
					</div>
				</div>

				<button
					type="button"
					class="btn btn-primary"
					data-toggle="modal"
					data-target="#exampleModal"
					data-whatever="@mdo"
				>
					+
				</button>
				<div
					class="modal fade"
					id="exampleModal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">
									Dodaj swój nowy task
								</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="form-group">
										<label for="tytul" class="col-form-label">
											Tytul:
										</label>
										<input type="text" class="form-control" id="tytul" onChange={this.saveTitle} />
									</div>
									<div class="form-group">
										<label for="description" class="col-form-label">
											Opis:
										</label>
										<textarea
											class="form-control"
											id="description"
											onChange={this.saveDescription}
										/>
									</div>
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-dismiss="modal">
									Zamknij
								</button>
								<button type="button" class="btn btn-primary" onClick={this.addItemToList}>
									Dodaj task
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
