import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Dropdown, Button } from 'react-materialize'
import ReactDOM from 'react-dom';

export default class Main extends Component {
	constructor(props){
		super(props);
		this.state={
			act: false,
			data:{
				avatar:false
			},

		}
	}
	render() {
		console.log('header');
		return (
			<>
			<div className="navbar navbar-default">
				<div className="container-fluid header-color">
					<div className="navbar-header">
						<a href="/" className="navbar-brand">
							<svg id="logo"/>
						</a>
					</div>

					<div className=" nav-item col-2">
					</div>
					<div className=" nav-item col-4">
						<form className="col s12">
							<div className="row">
								<div className="input-field col s12 nav-wrapper">
									<i className="small material-icons prefix">search</i>
									<input id="search" type="search" className="validate"/>
									<label for="search">Search</label>
								</div>
							</div>
						</form>
					</div>
					<div className="nav-item col-1">
					</div>
					<div className="nav-item">
						<div className="col-4">
							<NavLink to="/settings"><i className="small material-icons prefix">settings</i></NavLink>  
						</div>
					</div>
					<div className="nav-item">
						<div className="col-4">
							<NavLink to="/massages"><i className="small material-icons prefix">mail_outline</i></NavLink>  
						</div>
					</div>
					<div className="nav-item">
						<div className="col-4">
							<NavLink to="/notifications"><i className="small material-icons prefix">notifications</i></NavLink>  
						</div>
					</div>
					<div className="nav-item col-2">
						<div className="row" >
							<div className="col-3">
								{this.state.data.avatar ?
										null
										:
										<svg id="avatar_temp" alt="" className="circle responsive-img"/>
								}
							</div>
							<div className="row">
								<Dropdown trigger={
									<Button>Drop me!</Button>
								}>
								<ul className="nav-dropdown-items">      
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
							{/*					<div className="nav-item nav-dropdown col-9">
									<a  className="nav-link nav-dropdown-toggle"><i className="material-icons right">arrow_drop_down</i></a>
									<ul className="nav-dropdown-items">      
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
							</div>
							*/}						
						</div>
					</div>
				</div>
			</div>
		</div>
			<div className="sidebar-nav">
				<div className="nav-item side col-2">
					<div className="col-6 ">
						<NavLink to="news" className="waves-teal news-tab"> <svg id="news"/></NavLink>
						<NavLink to="recipes" className="waves-teal recipe-tab"> <svg id="recipes"/></NavLink>
					</div>
				</div>
			</div>


			<div className="fixed-action-btn">
				<a className="btn-floating btn-large red">
					<i className="large material-icons">mode_edit</i>
				</a>
				<ul>
					<li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
					<li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
					<li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
					<li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
				</ul>
			</div>


			</>
		)
	}
}


