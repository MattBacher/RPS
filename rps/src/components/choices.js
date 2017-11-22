import React from 'react';

const arr = ['Rock', 'Paper', 'Scissors'];
const buttons = arr.map((text, id) =>
	<button key={'choice_' + id}>{text}</button>
	);
let choice = '';


const Setup = () => (
	<div>
		{buttons}
	</div>
)
		

export default Setup;