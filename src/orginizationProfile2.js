import ReactDOM from "react-dom";
import React, { Component } from "react";
import axios from "./axios";
class OrginizationProfile2 extends Component {
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
            name="foundation"
            placeholder="Year of Foundation"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="employe"
            placeholder="Number of Employes"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="volunteers"
            placeholder="Number of volunteers"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="mission"
            placeholder="Mission Statement of Your Orginization"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="revenue"
            placeholder="Yearly Revenue"
            type="text"
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
export default OrginizationProfile2;
