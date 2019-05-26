import React, { Component } from 'react';

export default class Main extends Component {
	render() {
		console.log('header');
		return (
			<div className="navbar navbar-default">
				<div className="container-fluid">
					<div id ="main-button" className="navbar-header">
						<a href="/" className="navbar-brand">
							<svg id="logo"/>
						</a>
					</div>
					<div>
						<ul className="nav navbar-nav">
							<li className="active">
								<a> Hello</a>
							</li>
							<li>
								<a> HHH</a>
							</li>
							<li>
								<a> Buy</a>
							</li>
						</ul>
					</div>
					<div>
						<div>
							<div id="acc">
								<div>
								</div>
							</div>
							<form action="/account">
								
								<button>Account</button>
							</form>
						</div>
					</div>
				</div>
				<div>
					<div>
						<form action="/news">
							<button>News</button>
						</form>
					</div>
					<div>
						<form action="/recipes">
							<button>Recipes</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}


