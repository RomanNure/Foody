import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom'

import LeftBar from './component/leftbar';
import Main from './page/main.js';
import Header from './page/header.js';
import Account from './page/acc/account.js';
import News from './page/news.js';
import Recipes from './page/recipes.js';

export default class Root extends Component {
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
						<div className='col col-10'>
							<Switch>
								<Route path="/" component={News} />
								<Route path="/account" component={Account} />
								<Route path="/recipes" component={Recipes} />
							</Switch>
						</div>
					</div>
				</Router>
			</div>
		)
	}
}
