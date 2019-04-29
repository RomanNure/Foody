import React, { Component } from 'react';
import { BrowserRouter as Router, Route, browserHistory} from 'react-router-dom'
import App from './page/app.js';
import About from './page/about.js';
import Page from './page/page.js';

export default class Root extends Component{
	render(){
		console.log('router work');
		return (
			<div>
				<Router history={browserHistory}>
					<div>
						<Route path="/" component={App}/>
						<Route path="/about" component={About} />
						<Route path="/page" component={Page} />
					</div>
				</Router>
			</div>
		)
	}
}
