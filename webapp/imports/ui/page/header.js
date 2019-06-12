
import React, { Component } from 'react';
import { link, NavLink } from 'react-router-dom';
import { Dropdown, Button, Modal } from 'react-materialize'
import AccountsUIWrapper from '../AccountsUIWrapper.js';
import ReactDom from 'react-dom';


export default class Header extends Component {
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
		console.log("header");
		return (
			<div className="navbar navbar-default">
				<div className="container-fluid header-color">
					<div className="navbar-header">
						<a href="/" className="navbar-brand">
							<svg id="logo" />
						</a>
					</div>

					<div className="col-4">
						<form className="col s12">
							<div className="row">
								<div className="input-field col s12 nav-wrapper">
									<div className="row blue-text text-darken-2">
										<i className="small material-icons prefix">search</i>
										<input id="search" type="search" className="validate blue-text text-darken-2" />
										<label for="search">Search</label>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className="col-2">
						<div className="row">
							<NavLink to="/settings" className="col col-4" ><i className="small material-icons prefix">settings</i></NavLink>
							<NavLink to="/massages" className="col col-4"><i className="small material-icons prefix">mail_outline</i></NavLink>
							<NavLink to="/notifications" className="col col-4"><i className="small material-icons prefix">notifications</i></NavLink>
						</div>
					</div>
					<div className="col col-lg-2">
						<div className="row" >
							<div className="col-4">
								{this.state.data.avatar ?
										null
										:
										<svg id="avatar_temp" alt="" className="circle responsive-img" />
								}
							</div>

							<div className="col-lg-4">
								{this.state.account ?
										<div className="row">
											<Dropdown trigger={
												<Button>Drop me!</Button>
											}>
											<ul>
												<li className="side">
													<NavLink to="/account" className="nav-link waves-effect waves-light"><i className="small material-icons prefix">account_box</i> Account</NavLink>
												</li>
												<li className="side">
													<NavLink to="/settings" className="nav-link waves-effect waves-light"><i className="small material-icons prefix">settings</i> Settings</NavLink>
												</li>
												<li className="side">
													<NavLink to="/notification" className="nav-link waves-effect waves-light"><i className="small material-icons prefix">notifications</i> Notifications</NavLink>
												</li>
												<li className="side">
													<NavLink to="/favourite" className="nav-link waves-effect waves-light"><i className="small material-icons prefix">favorite_border</i> Favourite</NavLink>
												</li>
												<li className="divider"></li>
												<li className="side">
													<NavLink to="/massages" className="nav-link waves-effect waves-light"><i className="small material-icons prefix">mail_outline</i> Massages</NavLink>
												</li>
											</ul>
										</Dropdown>
									</div>
										: <>
										</>
								}
							</div>
							<div className="row">
								<Button data-target="modallogin" className="btn modal-trigger"> <AccountsUIWrapper /></Button>
							</div>

							<div className="fixed-action-btn">
								<a className="btn-floating btn-large red">
									<i className="large material-icons">mode_edit</i>
								</a>
								<ul>
									<li>
										<NavLink to='/recipe-add' className="btn-floating red darken-1" >
											<i className="material-icons">add_to_photos</i>
										</NavLink>
									</li>
									<li>
										<NavLink to='/review-add' className="btn-floating red darken-1">
											<i className="material-icons">add_circle</i>
										</NavLink>
									</li>
								</ul>
							</div>

						</div>
					</div>
				</div>
			</div>
		)
	}
}
