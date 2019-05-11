import React, { Component } from 'react';

export default class Main extends Component {
	render() {
		console.log('header');
		return (
			<>
			<div className="heeader">
				<div id ="main-button" className ="main">
					<form action="/">
						<img/>

					</form>
				</div>
				<div id ="account-button" className ="account">
					<form action="/account">
						<button className="active">Account</button>
					</form>
				</div>
				<div id ="news-button" className ="news">
					<form action="/news">
						<button className="active">News</button>
					</form>
				</div>
			</div>

			</>
		)
	}
}


