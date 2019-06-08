import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import RecipeSmall from '../component/Recipe-small.js';

class Recipes extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data:this.props.resipes?this.props.resipes:false,

		};
	}
	shouldComponentUpdate(p,s){
		if (p != this.props) return false;
		if (!this.props.ready) return false;
		return true;
	}


	render() {
		console.log('recipes');
		return (
			<div className="container-fluid">
				<div className="row">
					{	//this.state.data && this.state.data.map((i,k)=>{
						//	console.log('data=>', i,k);
						//	return(
								<div className="recipe-small">
									<RecipeSmall data={this.state.data}/>
								</div>
						//	)
					//	})
						
					}	
				</div>
			</div>
		)
	}
}


export default withTracker(() => {
	let ready=true, user, isAdmin = false;
	if(Meteor.isClient){
		const h = [
			Meteor.subscribe('recipes'),
		]
		//ready = h.every(i => i.ready())
		//    user = Meteor.user();
		//    isAdmin = Roles.userIsInRole(user, ['admin','contentor']);
	}

	return {
		ready,
//		recipes: Tasks.find({}).fetch(),
	};
})(Recipes);
