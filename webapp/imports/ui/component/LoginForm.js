import React, { Component } from "react";

export default class LoginForm extends Component {
	render() {
		return <div className="wrapper">
			<div className="form-wrapper">
				<h1 id="registerHead">Login</h1>
				<form className="registerForm">
					<div className="email">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							className=""
							placeholder="Email"
							name="email"
						/>
					</div>
					<div className="password">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className=""
							placeholder="Password"
							name="password"
						/>
						<small>Forgot password?</small>
					</div>
					<div className="createAccount">
						<button type="submit">Login</button>
					</div>
					<div className="loginServices">
						<small>Or Sign Up Using</small>
					</div>
					<div className="middle">
						<a className="btn" href="#">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a className="btn" href="#">
							<i className="fab fa-twitter"></i>
						</a>
						<a className="btn" href="#">
							<i className="fab fa-google"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
	}
}
