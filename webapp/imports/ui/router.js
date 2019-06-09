import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom'

import LeftBar from './component/leftbar';
import Main from './page/main.js';
import Header from './page/header.js';
import Account from './page/acc/account.js';
import News from './page/news.js';
import Recipes from './page/recipes.js';
import RecipeAdd from './component/Form_Recipe_Add-Edit';

export default class Root extends Component {
	componentDidMount(){
		M.AutoInit();
	}
	render() {
		console.log('router work');
		return (
			<div>
				<Router>
					<Header />
					<div className="row body">
						<div className='col col-2'>
							<LeftBar />
						</div>
						<div className='col col-lg-8'>
								<Route path="/news" component={News} />
								<Route path="/account" component={Account} />
								<Route path="/recipes" component={Recipes} />
						</div>
					</div>
					<div id="modal1" className="modal">
						<RecipeAdd />
					</div>
					<div id="modal2" className="modal">
						<div className="">
							<RecipeAdd />
						</div>
					</div>
					<div className="fixed-action-btn">
						<a className="btn-floating btn-large red">
							<i className="large material-icons">mode_edit</i>
						</a>
						<ul>
							<li><a data-target="modal1" className="btn-floating red darken-1 modal-trigger"><i className="material-icons">add_to_photos</i></a></li>
							<li><a data-target="modal2" className="btn-floating red darken-1 modal-trigger"><i className="material-icons">add_circle</i></a></li>
						</ul>
					</div>
				</Router>
			</div>
		)
	}
}
