import React, { Component } from 'react'

export default class News extends Component {
	render() {
		console.log('news');
		return (
				<div className="container-fluid">
                    <div className="row">
                        <button>hello</button> 
                        <div className="col-md-1" >left</div>
                        <div className="col-md-1" >Mid</div>
                        <div className="col-md-1" >right</div>
                        <div className="col-md-1" >left</div>
                        <div className="col-md-1" >Mid</div>
                        <div className="col-md-1" >right</div>
                        <div className="col-md-1" >left</div>
                        <div className="col-md-1" >Mid</div>
                        <div className="col-md-1" >right</div>
                        <div className="col-md-1" >left</div>
                        <div className="col-md-1" >Mid</div>
                        <div className="col-md-1" >right</div>
                    </div>
				</div>
		)
	}
}


