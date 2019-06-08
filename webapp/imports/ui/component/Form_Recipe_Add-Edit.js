import React, { Component } from 'react';

// Task component - represents a single todo item
export default class RecipeAdd extends Component {
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
	ingAdd = () => (e) => {
		e.preventDefault();
		let data = this.state.data;
		if(!data.ingr) data.ingr = []
		data.ingr.push(
			""
		)
		this.setState({data})
	}
	stepAdd = () => (e) => {
		e.preventDefault();
		let data = this.state.data;
		if(!data.steps) data.steps = []
		data.steps.push(
			""
		)
		this.setState({data})
	}
	removeIngridient = (k) => (e) => {
		e.preventDefault();
		let data = this.state.data;
		data.ingr.splice(k,1);
		this.setState({data});
	}
	removeStep = (k) => (e) => {
		e.preventDefault();
		let data = this.state.data;
		data.steps.splice(k,1);
		this.setState({data});
	}
	handleSubmit = () => (e) =>{
		e.preventDefault();
		let data = this.state.data;
		//		window.Toast('I am a toast!','ok');
		//	data.name = this.refs.name.value();
		Meteor.call("recipe.add", this.state.data, (err,done)=>{
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
						<input id="name" placeholder="Name" ref="name" type="text" className="validate"/>
						<label for="name">Recipe name</label>
					</div>
					<div className="input-field col-7">
						<input id="ing1" placeholder="Sugar" ref="ing" type="text" className="validate"/>
						<label for="ing1">Ingridients</label>
					</div>
					<div className="row col-12">
						{this.state.data.ingr && this.state.data.ingr.map((i,k) => {
							return <div key={'ing-'+i+'-'+k} className="col-7">
								<div className="row">
									<input col="col-6 col-md-6" ref={'ing'+k} type='text' label={"ingridient"+i}  defaultValue={this.state.data.ingr[k]} />
									<div className="col-4 mt-4">
										<button className="mt-0 mt-sm-2 btn-primary btn-close" waves='light' onClick={this.removeIngridient(k)}>Remove</button>
									</div>
								</div>
							</div>
						})}

						<div className="row">
							<button className="btn-floating btn-large waves-effect waves-light red" icon='add' onClick={this.ingAdd()}><i>+</i> Add Ingridient</button>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="input-field col-12">
						<textarea id="recipe-body" className="materialize-textarea" placeholder="Describe recipe" ></textarea>
						<label for="recipe-body">Recipe body</label>
					</div>
					<div className="input-field col-7">
						<input id="step" placeholder="#" ref="step" type="text" className="validate"/>
						<label for="step">Steps</label>
					</div>
				</div>
				<div className="row col-12">
					{this.state.data.steps && this.state.data.steps.map((i,k) => {
						return <div key={'step-'+i+'-'+k} className="col-7">
							<div className="row">
								<input col="col-6 col-md-6 mt-4" ref={'step'+k} type='text' label={"step"+i}  defaultValue={this.state.data.steps[k]} />
								<div className="col-6 mt-4 ">
									<button className="mt-0 mt-sm-2 btn-sm btn-primary btn-close" waves='light' onClick={this.removeStep(k)}>Remove</button>
								</div>
							</div>
						</div>
					})}
					<div className="row">
						<button className="btn-floating btn-large waves-effect waves-light red" waves='light' icon='add' onClick={this.stepAdd()}><i>+</i> Add Step</button>
					</div>
				</div>
				<div className="row">
					<form action="#">
						<div class="file-field input-field">
							<div class="btn">
								<span>File</span>
								<input type="file" multiple/>
							</div>
							<div class="file-path-wrapper">
								<input class="file-path validate" type="text" placeholder="Upload one or more files"/>
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
