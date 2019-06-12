import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom'

import LeftBar from './component/leftbar';
import Main from './page/main.js';
import Header from './page/header.js';
import Footer from './page/footer.js';
import Account from './page/acc/account.js';
import News from './page/news.js';
import Recipes from './page/recipes.js';
import RecipeAdd from './component/Form_Recipe_Add-Edit';
import ReviewAdd from './component/Form_Review_Add-Edit';

export default class Root extends Component {
	constructor(props){
		super(props)
		this.state= {
		}
	}
	componentDidMount(){
		this.setState({recipeadd: false, reviewadd: false})
		M.AutoInit();
	}
	render() {
		console.log('router work', this.state);
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
								<Route path="/recipe-add" component={RecipeAdd}/>
								<Route path="/review-add" component={ReviewAdd}/>
							</div>
					</div>
					<Footer/>
				</Router>
			</div>
		)
	}
}
