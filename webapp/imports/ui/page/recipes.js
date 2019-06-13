import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import RecipeSmall from '../component/Recipe-small.js';
import {DB_Recipes} from '../../api/recipes'
class Recipes extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}


	render() {
		console.log('recipes');
		return (
			<div className="container-fluid">
				<div className="row">
					{this.props.recipes && this.props.recipes.map((i, k) => {
						console.log('data=>', i, k);
						return (
							<>
							<div className="recipe-small col-md-7 offset-md-2">
								<RecipeSmall data={i} />
							</div>
							<div className="col col-6 devider">
								<div>hello</div>
							</div>
							</>
						)
					})

					}
				</div>
			</div>
		)
	}
}


export default withTracker(() => {
//	if (Meteor.isClient) {
		Meteor.subscribe("recipes")
//	}

	return {
		recipes: DB_Recipes.find({}).fetch(),
	};
})(Recipes);
