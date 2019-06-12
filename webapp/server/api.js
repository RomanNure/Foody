import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles'; 
import { check, Match } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

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
	Meteor.methods({
		'recipe.add'(data){
			const userId = Meteor.userId()
			console.log('adding recipe by user', userId)
			check(data,{
				title: String,
				RBody: String,
				ingr: [String],
				steps: [String],
				tags: Match.Maybe(String),
				imgs: Match.Maybe([String])
			})
			if(!userId) throw new Meteor.Error('please authorize to continue');
			let user = Meteor.users.findOne({_id:Meteor.userId()})
			if(!user) throw new Meteor.Error('please authorize to continue');
			console.log('user =>',user);
			let	userData = {
				name: user.name,
				img: user.img,
				id: user._id,
			}
			//data from google
			if(!userData.name)
				userData = {
					name: user.services.google.name,
					pucture: user.services.google.picture,
					id: userId,
				}
			data.user = userData;
			console.log(data)
		return 	DB_Recipes.insert({data})
		},
		'recipe.edit'(id){
			if(!Meteor.userId()) return "no roots"
			console.log(' user=>', userId);
			let recipe = DB_Recipes.find({_id:id});
			if(recipe) return recipe;
			return 'no roots';
		},
		'review.add'(data){

			const userId = Meteor.userId()
			console.log('adding reviw by user', userId)
			check(data,{
				title: String,
				RBody: String,
				mark: Number,
				tags: Match.Maybe(String),
				imgs: Match.Maybe([String])
			})
			
			if(!userId) throw new Meteor.Error('please authorize to continue');
			let user = Meteor.users.findOne({_id:Meteor.userId()})
			if(!user) throw new Meteor.Error('please authorize to continue');
			console.log('user =>',user);
			let	userData = {
				name: user.name,
				img: user.img,
				id: user._id,
			}
			//data from google
			if(!userData.name)
				userData = {
					name: user.services.google.name,
					pucture: user.services.google.picture,
					id: userId,
				}
			data.user = userData;
			console.log(data)
			return DB_Reviews.insert({data})
		},
		'recipe.like'(id){
			check(id, String);
			const userId = Meteor.userId()
			if(!userId) throw new Meteor.Error('please autorize to continue');
			let recipe = DB_Recipes.findOne({_id:id});
			let like;
			if (!recipe) throw new Meteor.Error('no such recipe');
			if(!recipe.like) like = 1;
			else like = recipe.like+1;
			return DB_Recipes.updateOne({_id:id}, {$set:{'like':like}})
		},
		'review.like'(id){
			check(id, String);
			const userId = Meteor.userId()
			if(!userId) throw new Meteor.Error('please autorize to continue');
			let review = DB_Review.findOne({_id:id});
			let like;
			if (!review) throw new Meteor.Error('no such review');
			if(!reciew.like) like = 1;
			else like = recipe.like+1;
			return DB_Reviews.updateOne({_id:id}, {$set:{'like':like}})
		}
	})


	Accounts.onCreateUser((options, user) => {
		user.profile = options.profile || {};
		if (user.email && (user.emails[0].address == "roman.kameniev@gmail.com")) user.roles = ['admin']
		return user;
	});
	//Meteor.loginWithFacebook((options, user) => {

//	})
}
