import React, { Component } from 'react';
// App component - represents the whole app

export default class Page extends Component {

	render() {
		console.log("page");
		return (
			<div className="container">
				<header>
					<h1>Page</h1>
				</header>
			</div>
		);
	}
}

