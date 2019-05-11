import React, { Component } from 'react';

// Task component - represents a single todo item
export default class RecipeAdd extends Component {

	render() {
		console.log("Form Add recipe");
		return(
			<>
			<header>
				<h4> Recipe add</h4>
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
