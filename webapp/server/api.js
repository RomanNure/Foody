import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles'; 
import { check, Match } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

import { DB_Recipe } from '/imports/api/recipes.js';
import { DB_Reviews } from '/imports/api/review.js';


if(Meteor.isServer){
	console.log('server');

	Meteor.publish("recipes",()=>{
		console.log('- recipe pub');
		return 	DB_Recipe.find();
	})
	Meteor.publish("news",()=>{
		console.log('- recipe pub');
		return [	
		//	DB_Recipes.find({}, {sort:{createdAt:-1}}),
		//	DB_Reviews.find({},{sort:{createdAt:-1}})
		
		]
	})
	Meteor.methods({
		'recipe.add'(data){
			check(data,{
				title: String,
				RBody: String,
				ingr: [String],
				steps: [String],
				tags: Match.Maybe(String),
				imgs: Match.Maybe([String])
			})
			if(!Meteor.userId()) throw new Meteor.Error('please authorize to continue');
			let userId = Meteor.users.findOne({_id:Meteor.userId()})
			if(!userId) throw new Meteor.Error('please authorize to continue');
			console.log('user =>',user);
			let	user = {
				name: userId.name,
				img: userId.img,
				id: userId._id,
			}
			data.user = user;
			DB_Recipe.insert({data})
		},
		'recipe.edit'(id){
			if(Meteor.userId()){
				console.log(' user=>', userId);
			}
			let recipe = DB_Recipes.find({_id:id});
			if(recipe) return recipe;
			return 'no roots';

		},
		'review.add'(data){
			check(data,{
				title: String,
				RBody: String,
				mark: Number,
				imgs: Match.Maybe([String])
			})
			if(!Meteor.userId()) throw new Meteor.Error('please authorize to continue');
			let userId = Meteor.users.findOne({_id:Meteor.userId()})
			if(!userId) throw new Meteor.Error('please authorize to continue');
			console.log('user =>',user);
			let	user = {
				name: userId.name,
				img: userId.img,
				id: userId._id,
			}
			data.user = user;
			DB_Reviews.insert({data})
		},

	})

	Accounts.onCreateUser((options, user) => {
		user.profile = options.profile || {};
		if (user.email && (user.emails[0].address == "roman.kameniev@gmail.com")) user.roles = ['admin']
		return user;
	});
	Meteor.loginWithFacebook((options, user) => {

	})
}
