import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.carousel');
			//	var instances = M.Carousel.init(elems, options);

			var instance = M.Carousel.init({
				fullWidth: true
			});
		});
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.dropdown-trigger');
			var instances = M.Dropdown.init(elems, options);
		  });
	}
	drop = () => (e) =>{
		e.preventDefault()
	 var instance = Materialize.Dropdown.getInstance(elem);

	}
	dropdown = () => (e) => {
		e.preventDefault()
		console.log('ok',e);
		e.target.parentElement.classList.toggle('open');
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

					<div className=" nav-item col-md-2">
					</div>
					<div className=" nav-item col-md-4">
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
					<div className="nav-item col-2">
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
								<div className="nav-item nav-dropdown col-9">
									<a onClick={this.dropdown()} className="nav-link nav-dropdown-toggle"><i className="material-icons right">arrow_drop_down</i></a>
									<ul className="nav-dropdown-items">      
										{/*	<li className="side">
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
									*/}
								</ul>
							</div>
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


			<div class="fixed-action-btn">
				<a class="btn-floating btn-large red">
					<i class="large material-icons">mode_edit</i>
				</a>
				<ul>
					<li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
					<li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
					<li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
					<li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
				</ul>
			</div>
			<div class="carousel carousel-slider">
				<a class="carousel-item" href="#one!"><img src="https://lorempixel.com/800/400/food/1"/></a>
				<a class="carousel-item" href="#two!"><img src="https://lorempixel.com/800/400/food/2"/></a>
				<a class="carousel-item" href="#three!"><img src="https://lorempixel.com/800/400/food/3"/></a>
				<a class="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4"/></a>
			</div>
			<a class='dropdown-trigger btn' href='#' onClick={this.drop()} data-target='dropdown1'>Drop Me!</a>

			<ul id='dropdown1' class='dropdown-content'>
				<li><a href="#!">one</a></li>
				<li><a href="#!">two</a></li>
				<li class="divider" tabindex="-1"></li>
				<li><a href="#!">three</a></li>
				<li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
				<li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
			</ul>


			</>
		)
	}
}


