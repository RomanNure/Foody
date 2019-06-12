import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Task component - represents a single todo item
export default class RecipeAdd extends Component {
	constructor(props){
		super(props);
		this.state={
			ready: true,
			data:this.props.recipe?this.props.recipe:{}
		}
	}

	componentDidMount(){
		M.AutoInit()
	}
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
		console.log('this.refs', this.refs)
		try{
			let data = {
				title: this.refs.title.value,
				RBody: this.refs.RBody.value,
				tags: this.refs.tags.value,
				steps: this.state.data.steps,
				ingr: this.state.data.ingr
			}

			data.steps[0]= this.refs.step.value,
				data.ingr[0]= this.refs.ingr.value,
				console.log(data)

			this.state.data.steps.length > 1 && this.state.data.steps.map((i,k)=>{
				let temp = 'step'+k            
				//console.log(temp, this.refs); 
				if(this.refs[temp]) data.steps[k] = this.refs[temp].value
				//  console.log(this.refs[temp].value());
			})
			this.state.data.steps.length > 1 && this.state.data.ingr.map((i,k)=>{
				let temp = 'ingr'+k            
				//  console.log(temp);          
				if(this.refs[temp]) data.ingr[k] = this.refs[temp].value
				//  console.log(this.refs[temp].value());
			})
			/*
		this.state.data.phone && this.state.data.phone.length > 0 && !this.state.data.phones.find(i => i == this.state.data.phone) && this.state.data.phones.push(this.state.data.phone);

		this.state.data.email && this.state.data.email.length > 0 && !this.state.data.emails.find(i => i == this.state.data.email) && this.state.data.emails.push(this.state.data.email);
		this.state.data.abuse && this.state.data.abuse.length > 0 && !this.state.data.emails.find(i => i == this.state.data.abuse) && this.state.data.emails.push(this.state.data.abuse);
			//remove empty elements         
		this.state.data.emails = this.state.data.emails.filter(i => i!= null && i.length > 0);
		this.state.data.phones = this.state.data.phones.filter(i => i!= null && i.length > 0);
			//		window.Toast('I am a toast!','ok');
			*/		//	data.name = this.refs.name.value();
			console.log('data->',data)
			Meteor.call("recipe.add", data, (err,done)=>{
				if(err){ 
					toast.error(err, {
						position: toast.POSITION.TOP_RIGHT
					});	
					console.log('err0r');
				}else{
					toast.success("Recipe  Added!", {
						position: toast.POSITION.TOP_RIGHT
					})
					console.log(done);
				}
			})
		}catch(er){
			toast.error("Input error !", {
				position: toast.POSITION.TOP_RIGHT
			});	

		}
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
			<div className="container recipe-add">
				<ToastContainer />				<div className="row">

					<div className="input-field col-12">
						<input id="name" ref="title" type="text" className="validate"/>
						<label for="name">Recipe name</label>
					</div>
					<div className="input-field col-7">
						<input id="ing1"  ref="ingr" type="text" className="validate"/>
						<label for="ing1">Ingridients</label>
					</div>
					<div className="row col-12">
						{this.state.data.ingr && this.state.data.ingr.map((i,k) => {
							return <div key={'ingr'+i+'-'+k} className="col-7">
								<div className="row">
									<input col="col-6 col-md-6" ref={'ingr'+k} type='text' label={"ingridient"+i}  defaultValue={this.state.data.ingr[k]} />
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
						<textarea id="recipe-body" ref="RBody" className="materialize-textarea" ></textarea>
						<label for="recipe-body">Recipe body</label>
					</div>
					<div className="input-field col-7">
						<input id="step" ref="step" type="text" className="validate"/>
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
						<input id="tag1" placeholder="#sweet" ref="tags" type="text" className="validate"/>
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
