import React, { Component } from 'react';

// Task component - represents a single todo item
export default class ReviewAdd extends Component {
	constructor(props){
		super(props);
		this.state={
			ready: true,
			data:{
				steps: [],
				ingr:[],
				recipe: false,
				tags: false, 
				images: false,
			}
		}
	}
	//	shouldComponentUpdate()
	handleSubmit = () => (e) =>{
		e.preventDefault();
		let data = this.state.data;
		//		window.Toast('I am a toast!','ok');
		//	data.name = this.refs.name.value();
		Meteor.call("review.add", this.state.data, (err,done)=>{
			if(err) console.log('err0r');
			console.log(done);

		})
	}

	render() {
		console.log("Form Add recipe");
		/*if(!this.state.ready){
			return(		
				<div class="progress">
					<div class="indeterminate"></div>
				</div>
			)
		}*/
		return (
			<div className="container">
				<div className="row">

					<div className="input-field col-12">
						<input id="name" ref="name" type="text" className="validate"/>
						<label for="name">Title</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col-12">
						<textarea id="review-body" className="materialize-textarea" ></textarea>
						<label for="review-body">Review body</label>
					</div>
				</div>
				<div className="row">
					<form action="#">
						<div className="file-field input-field">
							<div className="btn">
								<span>File</span>
								<input type="file" multiple/>
							</div>
							<div className="file-path-wrapper">
								<input className="file-path validate" type="text" placeholder="Upload one or more files"/>
							</div>
						</div>
					</form>
				</div>
				<div className="row">
					<div className="input-field col-12">
						<input id="tag1" placeholder="#sweet" ref="tag" type="text" className="validate"/>
						<label for="tag1">Tag</label>
					</div>
                    <div className="col-10">
					</div>
					<div className="col-2">
						<button className="mt-0 mx-auto d-block ml-sm-0 btn btn-primary add-button waves-effect waves-light" waves='light' icon='add' onClick={this.handleSubmit()}> Submit</button>
					</div>
				</div>
			</div>
		)
	}
}
