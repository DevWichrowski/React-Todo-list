import React, { Component } from 'react';
import './List.css';
import Item from '../Item/Item';

export default class List extends Component {
  state = {
    title: 'test',
    description: 'description'
  }

	render() {
		return (
			<div>
				<div className="list">
					<div className="list-heading">
						<h4>Lista to-do</h4>
						<hr />
            <div className="item-list">
              <Item title={this.state.title}/>
            </div>
					</div>
				</div>
			</div>
		);
	}
}
