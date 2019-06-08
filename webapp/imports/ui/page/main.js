import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Dropdown, Button, Modal } from 'react-materialize'
import ReactDOM from 'react-dom';
import RecipeAdd from '../component/Form_Recipe_Add-Edit'

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
	componentDidMount(){
	console.log('mount')
			var elems = document.querySelectorAll('.modal');
			var instances = M.Modal.init(elems);
			console.log('ins',instances)
	}
	show = () => (e) => {
		e.preventDefault()
	//	 M.Modal.getInstance(elem);


	}
	render() {
		console.log('header');
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.modal');
			var instances = M.Modal.init(elems, options);
		});
		return (
			<>
			<div className="navbar navbar-default">
				<div className="container-fluid header-color">
					<div className="navbar-header">
						<a href="/" className="navbar-brand">
							<svg id="logo"/>
						</a>
					</div>

					<div className="col-4">
						<form className="col s12">
							<div className="row">
								<div className="input-field col s12 nav-wrapper">
									<div className="row">
										<i className="small material-icons prefix">search</i>
										<input id="search" type="search" className="validate"/>
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
										<svg id="avatar_temp" alt="" className="circle responsive-img"/>
								}
							</div>
							<div className="col-lg-4">
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
						</div>
					</div>
				</div>
			</div>
		</div>
			<div className="sidebar-nav">
				<div className="nav-item col-2">
					<div className="col-6 ">
						<NavLink to="news" className="waves-teal news-tab"> <svg id="news"/></NavLink>
						<NavLink to="recipes" className="waves-teal recipe-tab"> <svg id="recipes"/></NavLink>
					</div>
				</div>
			</div>

			<div id="modal1" className="modal">
					<RecipeAdd/>
			</div>


			<div className="fixed-action-btn">
				<a className="btn-floating btn-large red">
					<i className="large material-icons">mode_edit</i>
				</a>
				<ul>
					<li><a data-target="modal1" className="btn-floating red darken-1 modal-trigger"><i className="material-icons">add_to_photos</i>

					</a></li>
					<li><a className="btn-floating red darken-1"><i className="material-icons">add_circle</i></a></li>
				</ul>
			</div>


			</>
		)
	}
}


