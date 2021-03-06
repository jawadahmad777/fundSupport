import React, { Component } from "react";
import axios from "./axios";
import App from "./app";
// import OrginizationProfile from "./orginizationProfile";
class Registration extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.post("/registration", this.state).then(resp => {
      console.log(resp);
      if (resp.data.success) {
        this.setState({
          isLoggedIn: true
        });
        location.replace("/");
      }
    });
  }
  render() {
    if (this.state.isLoggedIn) {
      return <App />;
    }
    return (
      <div className="registration">
        <div className=" registrationInfo">
          <h1>FundSupport Community</h1>
          <p>Join us and stay up to date!</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="firstName"
            placeholder="First Name"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="lastName"
            placeholder="Last Name"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="email"
            placeholder="Email"
            type="email"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="password"
            placeholder="Password"
            type="password"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="project"
            placeholder="Focus Project"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="orginization"
            placeholder="Orginization"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="website"
            placeholder="Website"
            type="text"
          />
          <br />
          <select name="source" onChange={this.handleChange}>
            <option value="How did you heard about us ?">
              How you heard about us ?
            </option>
            <option value="internet">Internet</option>
            <option value="friends">Friends</option>
            <option value="facebook">Facebook</option>
            <option value="linkdin">LinkedIn</option>
          </select>
          <br />
          <p>
            By creating an account you agree to our{"     "}
            <a href="#">Terms & Privacy</a>.
          </p>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
export default Registration;
