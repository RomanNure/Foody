import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Dropdown, Button, Modal } from 'react-materialize'
import ReactDOM from 'react-dom';
export default class LeftBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            act: false,
            data: {
                avatar: false
            },

        }
    }
    render() {
        return (
            <>
                <div className="sidebar-nav">
                    <div className="nav-item col-2">
                        <div className="col-6 ">
                            <NavLink to="news" className="waves-teal news-tab"> <svg id="news" /></NavLink>
                            <NavLink to="recipes" className="waves-teal recipe-tab"> <svg id="recipes" /></NavLink>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
