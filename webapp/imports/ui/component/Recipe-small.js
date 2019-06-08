import React, { Component } from 'react';

import Carousel from 'react-materialize';


export default class RecipeSmall extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    componentDidMount() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, options);

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
                    <div className="carousel">
                        <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"/></a>
                        <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/></a>
                        <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/></a>
                        <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
                        <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
                    </div>		
                </div>
                <div className="row">

                </div>
            </div>
        )

    }

}
