import React, { PureComponent } from 'react';

export default class RecipeSmall extends Component {
	constructor(props){
		super(props);
		this.state={
		}
	}
	render() {
		console.log('recipe-small');
		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div>tags</div>
					</div>
				</div>
				<div className="row">
					<ul className="carousel">
						<li className="carousel-item">
							<a href="!#">
								<img src=""/>
							</a>
						</li>
						<li className="carousel-item">
							<a href="!#">
								<img src=""/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		)
	
	}

}
