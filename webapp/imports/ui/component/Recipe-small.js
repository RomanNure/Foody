import React, { PureComponent } from 'react';

import Carousel from 'nuka-carousel';


export default class RecipeSmall extends Component {
	constructor(props){
		super(props);
		this.state={
			data:this.props.data?
				this.props.data:{
					img: "temp"

				}
		}
	}
	render() {
		console.log('recipe-small');
		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col-4">
						<img/>
					</div>
					<div className="col-6">
						<div className="row">
							<div className="col-12">
								<div>tags</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<Carousel>
						<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
						<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
						<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
						<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
						<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
						<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
					</Carousel>
				</div>
				<div className="row">i
					
				</div>
			</div>
		)

	}

}
