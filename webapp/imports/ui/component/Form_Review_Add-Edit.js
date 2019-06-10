import React, { Component } from 'react';

// Task component - represents a single todo item
export default class ReviewAdd extends Component {

	render() {
		console.log("Form Add review");
		return(
			<>
			<header>
				<h4> Review add</h4>
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
