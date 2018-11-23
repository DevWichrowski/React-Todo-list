import React from 'react';
import './Item.css';

export default function Item(props) {
	return <div className="item">
	{props.title}
	<button className="btn btn-primary">Edit</button>
	<button className="btn btn-danger" onClick={props.delete}>Delete</button>
	</div>;
}
