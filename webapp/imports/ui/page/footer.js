import React, { Component } from 'react';
import { link, NavLink } from 'react-router-dom';
import { Dropdown, Button, Modal } from 'react-materialize'
import AccountsUIWrapper from '../AccountsUIWrapper.js';
import ReactDom from 'react-dom';


export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			account: this.props.account ? this.props.account : false,
			act: false,
			data: {
				avatar: false
			},

		}
	}
	componentDidMount() {
		M.AutoInit()
		console.log('mount')
	}



	render() {
		console.log("footer");
		return (
			<div className="navbar navbar-default">
				<div className="container-fluid header-color">
					<div className="navbar-header">
						<a href="/" className="navbar-brand">
							<svg id="logo-back" />
						</a>
					</div>
					<div className="row ">
						<div className="col-12">
							<h2><strong><em>Cook is easy- just try it!</em></strong></h2>
						</div>
					</div>
					<div class="footer-copyright">
						<div class="container">
							© 2019 R. Kameniev  && V. Bezkyshkyi
							<a class="grey-text text-lighten-4 right" href="#!">More Links</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
