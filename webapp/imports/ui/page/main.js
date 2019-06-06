import React, { Component } from 'react';

export default class Main extends Component {
    render() {
        console.log('header');
        return (
            <>
            <div className="navbar navbar-default">
                <div className="container-fluid header-color">
                    <div className="navbar-header">
                        <a href="/" className="navbar-brand">
                            <svg id="logo"/>
                        </a>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                        <div className="col-md-4">
                            settings
                        </div>
                    </div>
                    <div>
                        <div className="col-md-4">
                            massages
                        </div>
                    </div>
                    <div>
                        <div className="col-md-4">
                            saved
                        </div>
                    </div>
                    <div>
                        <div className="row">
                        </div>
                        <div className="row">
                            <div className="col-md-12 search">
                                search
                            </div>
                        </div>
                    </div>
                    <div className="avatar">
                            avatar
                    </div>
                    <div>
                        <div id="acc">
                            <div>
                                Name
                            </div>
                        </div>
                        <form action="/account">
                            <button>Account</button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <a href="/news">
                        <svg id="news"/>
                    </a>
                </div>
                <div>
                    <a href="/recipes">
                        <svg id="recipes"/>
                    </a>
                </div>
            </div>
            </>
        )
    }
}


