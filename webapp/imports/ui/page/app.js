import React, { Component } from 'react';
import { Link } from 'react-router'

export default class App extends Component {
  render() {
  	console.log('app');
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
			<li><a href='/about' className="active">About</a></li>
			<li><a href='/page' className="active">Page</a></li>
        </ul>
      </div>
    )
  }
}


