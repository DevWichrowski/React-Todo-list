import React from 'react';
import './Item.css';

export default function Item(props) {
	return <div className="item">{props.title}</div>;
}
