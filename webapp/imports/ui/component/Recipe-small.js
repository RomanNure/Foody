import React, { Component } from 'react';

import { Carousel } from 'react-materialize';


export default class RecipeSmall extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems);

    }

    render() {
        console.log('recipe-small');
        return (
            <div className="container-fluid">
                <div className="row user">
                    <div className="col col-2">
                        <svg id="avatar_temp" alt="" className="circle responsive-img" />
                    </div>
                    <div className="col col-3">
                        <div className="row name">
                            {this.state.name?this.state.name:"N/A"}
                        </div>
                        <div className="row rating">
                            {this.state.name?this.state.name:"125 cooker"}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Carousel options={{ fullWidth: true, indicators: true }} images={[
                        'https://lorempixel.com/800/400/food/1',
                        'https://lorempixel.com/800/400/food/2',
                        'https://lorempixel.com/800/400/food/3',
                        'https://lorempixel.com/800/400/food/4'
                    ]} />
                </div>
                <div className="row">
                    <div className="col col-4 recipe-rating">3/5</div>    
                    <div className="col col-lg-2 recipe-rating">like</div>    
                    <div className="col col-lg-2 recipe-rating">Comments</div>    
                </div>
            </div>
        )

    }

}
