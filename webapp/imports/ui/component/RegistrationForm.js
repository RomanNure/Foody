import React, { Component } from "react";

export default class RegistrationForm extends Component {
  render() {
    return <div className="wrapper">
      <div className="form-wrapper">
        <h1 id="registerHead">Create Account</h1>
        <form className="registerForm">
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className=""
              placeholder="First Name"
              name="firstName"
            />
          </div>
          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className=""
              placeholder="Last Name"
              name="lastName"
            />
          </div>
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
          </div>
          <div className="passwordCheck">
            <label htmlFor="passwordCheck">Confirm Password</label>
            <input
              type="password"
              className=""
              placeholder="Password"
              name="passwordCheck"
            />
          </div>
          <div className="createAccount">
            <button type="submit">Create Account</button>
            <small>Already Have an Account?</small>
          </div>
        </form>
      </div>
    </div>
  }
}
