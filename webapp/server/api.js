import { Meteor } from 'meteor/meteor';
//import { Roles } from 'meteor/alanning:roles'; 
//import { check, Match } from 'meteor/check';
//import { Accounts } from 'meteor/accounts-base';

import { DB_Recipes } from '/imports/api/recipes.js';
import { DB_Reviews } from '/imports/api/review.js';


if(Meteor.isServer){
	console.log('server');

	Meteor.publish("recipes",()=>{
		console.log('- recipe pub');
		return 	DB_Recipes.find();
	})
	Meteor.publish("news",()=>{
		console.log('- recipe pub');
		return [	
		//	DB_Recipes.find({}, {sort:{createdAt:-1}}),
		//	DB_Reviews.find({},{sort:{createdAt:-1}})
		
		]
	})



}
