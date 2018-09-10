import ReactDOM from "react-dom";
import React, { Component } from "react";
import axios from "./axios";
class OrginizationProfile3 extends Component {
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
      }
    });
  }
  render() {
    // if (this.state.isLoggedIn) {
    //   return <OrginizationProfile />;
    // }
    return (
      <div className="registration">
        <div className=" registrationInfo">
          <p className="some">
            The more detailed your organization profile is<br /> the better
            fitted will be the funding opportunities that we will find for your
            organization.
          </p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="org"
            placeholder="Current or Farmer funding Orginization Name"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="fundingname"
            placeholder="Current or Farmer funding program Name"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="time"
            placeholder="Current or Farmer funding, Start or End"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="pic"
            placeholder="EU PIC Number"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="comment"
            placeholder="Comment"
            type="text"
          />
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
export default OrginizationProfile3;