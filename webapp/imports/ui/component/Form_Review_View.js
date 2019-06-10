import React, { Component } from 'react';

// Task component - represents a single todo item
export default class ReviewShow extends Component {

	render() {
		console.log("Form review show");
		return(
			<>
			<header>
				<h4> Review show</h4>
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
