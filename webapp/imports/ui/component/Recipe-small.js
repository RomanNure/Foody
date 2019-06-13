import React, { Component } from 'react';

import { Carousel } from 'react-materialize';


export default class RecipeSmall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:this.props.data,
            rating:5.0,
            like: false
        }
    }
	shouldComponentUpdate(n,s){
		if(n != this.props) return true
		return false
	}
    componentDidMount() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems);
        let rating= [];
        let r = this.state.rating/2;
        if(!this.state.ratingArr)
        for(let i = 0; i< r-1; i++){ rating.push(0); }
        if(r/10 > 0) rating.push(1)
        while(rating.length<5) rating.push(-1);
        this.setState({ratingArr:rating})
    }
    like =() =>(e)=>{
        if(!this.props.account)
        console.log('please autorizate')
        this.setState({like: !this.state.like})
		Meteor.call('recipe.like', this.props.data._id)
			
    }

    render() {
        console.log('recipe-small', this.state);
        return (
            <div className="container-fluid">
                <div className="row user">
                    <div className="col col-2">
                        <svg id="avatar_temp" alt="" className="circle responsive-img" />
                    </div>
                    <div className="col col-3">
                        <div className="row name">
                            {this.state.data && this.state.data.data.user && this.state.data.data.user.name?this.state.data.data.user.name:"N/A"}
                        </div>
                        <div className="row rating">
                            {this.state.name?this.state.name:"125 cooker"}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Carousel options={{ fullWidth: true, indicators: true, centerImage: true }} images={[
                        'https://lorempixel.com/800/400/food/1',
                   //     'https://lorempixel.com/800/400/food/2',
                   //     'https://lorempixel.com/800/400/food/3',
                   //     'https://lorempixel.com/800/400/food/4'
                    ]} />
                </div>
                <div className="row">
                    <div className="col col-4 star">
                        <div className="row">
                            {this.state.ratingArr && this.state.ratingArr.map((i,k)=>{
                                if(i == 0)
                                    return <a className="col col-2"><i className="material-icons">star</i></a>
                                if(i == 1)
                                    return <a className="col col-2"><i className="material-icons">star_half</i></a>
                                if(i == -1)
                                    return <a className="col col-2"><i className="material-icons">star_border</i></a>
                                })
                            }
                            <h5>{this.state.data.rating && this.state.data.rating}</h5>
                        </div>
                        <div className="row">
                            <label> Recipe</label>
                            {this.state.data.RBody?this.state.data.RBody:""}
                        </div>
                    </div>    
                    <div className="col like">
                        <a className="col-lg-1" onClick={this.like()}><i className="material-icons">{this.state.like?"favorite":"favorite_border"}</i></a>
						<div className="col-lg-1">
						{this.state.data.like? this.state.data.like:"0"}
						</div>
                    </div>    
                </div>
                    <div className="col col-lg-2 recipe-rating">Comments</div>    
            </div>
        )

    }

}
