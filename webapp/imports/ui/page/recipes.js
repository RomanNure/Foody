import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import RecipeSmall from '../component/Recipe-small.js';

class Recipes extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: this.props.resipes ? this.props.resipes : {
				arr: [1, 2, 3, 1, 2, 3, 1, 2, 3, 4]

			},

		};
	}
	shouldComponentUpdate(p, s) {
		if (p != this.props) return false;
		if (!this.props.ready) return false;
		return true;
	}


	render() {
		/*if (!this.props.ready)
			return (
				<div class="preloader-wrapper active">
					<div class="spinner-layer spinner-red-only">
						<div class="circle-clipper left">
							<div class="circle"></div>
						</div><div class="gap-patch">
							<div class="circle"></div>
						</div><div class="circle-clipper right">
							<div class="circle"></div>
						</div>
					</div>
				</div>
			)
*/
		console.log('recipes');
		return (
			<div className="container-fluid">
				<div className="row">
					{this.state.data && this.state.data.arr.map((i, k) => {
						console.log('data=>', i, k);
						return (
							<>
							<div className="recipe-small col col-8">
								<RecipeSmall data={this.state.data} />
							</div>
							<div className="col col-6">
								<div>aga</div>
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
	let ready = true, user, isAdmin = false;
	if (Meteor.isClient) {
		const h = [
			Meteor.subscribe('recipes'),
		]
		//ready = h.every(i => i.ready())
		//    user = Meteor.user();
		//    isAdmin = Roles.userIsInRole(user, ['admin','contentor']);
	}

	return {
		ready,
		//		recipes: .find({}).fetch(),
	};
})(Recipes);
