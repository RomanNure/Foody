import React, { Component } from 'react';

export default class RecipeShow extends Component {

	render() {
		console.log("Form Recipe show");
		return(
			<>
			<header>
				<h4> Recipe show</h4>
			</header>
			<body>
				<div>
					<input type="text"/>
				</div>
			</body>
			</>
		)
	}
}
