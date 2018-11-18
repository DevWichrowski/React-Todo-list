import React from 'react';
import './AddItemButton.css';

export default function AddItemButton() {
	return (
		<div>
			<input
				type="text"
				class="form-control"
				placeholder="Tytul"
				aria-label="Tytul"
				aria-describedby="basic-addon1"
			/>
            <input
					type="text"
					class="form-control"
					placeholder="Opis"
					aria-label="Opis"
					aria-describedby="basic-addon1"
				/>
            <button>Dodaj</button>
		</div>
	);
}
