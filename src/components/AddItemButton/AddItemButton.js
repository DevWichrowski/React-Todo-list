import React from 'react';
import './AddItemButton.css';

export default function AddItemButton(props) {
	return (
		<div>
			<input
				type="text"
				className="form-control"
				placeholder="Tytul"
				aria-label="Tytul"
				aria-describedby="basic-addon1"
			/>
            <input
					type="text"
					className="form-control"
					placeholder="Opis"
					aria-label="Opis"
					aria-describedby="basic-addon1"
				/>
            <button onClick={props.click}>Dodaj</button>
		</div>
	);
}
