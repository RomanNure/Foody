import React, { Component } from 'react';
import { BrowserRouter as Router, Route, browserHistory} from 'react-router-dom'
import Main from './page/main.js';
import Account from './page/acc/account.js';
import News from './page/news.js';
import Recipes from './page/recipes.js';

export default class Root extends Component{
	render(){
		console.log('router work');
		return (
			<div>
				<Router history={browserHistory}>
					<div>
						<Route path="/" component={Main}/>
						<Route path="/account" component={Account}/>
						<Route path="/news" component={News}/>
						<Route path="/recipes" component={Recipes}/>
					</div>
				</Router>
			</div>
		)
	}
}
