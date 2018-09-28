import ReactDOM from "react-dom";
import React, { Component } from "react";
import axios from "./axios";
import history from "./history";
import { BrowserRouter, Route } from "react-router-dom";

class FundingOpportunities extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit2(e) {
    e.preventDefault();
    axios.post("/projectProfile", this.state).then(resp => {
      console.log(resp);
      if (resp.data.success) {
        this.setState({
          isLoggedIn: true
        });
      }
    });
  }

  render() {
    return (
      <div className="registration">
        <div className=" registrationInfo">
          <h1>Project Profile</h1>
          <p className="some">
            The more detailed the project profile is,the better fitted will be
            the funding opportunities that we can find for your project.
            Therefore we strongly recommend to submit the profile as detailed as
            possible Contrary to common searches, we also provide strong matches
            that might deviate in some aspects, if we think these funding
            opportunities might be interesting for your project.
          </p>
        </div>
        <form onSubmit={this.handleSubmit2}>
          <input
            onChange={this.handleChange}
            name="projectname"
            placeholder="Name of Project"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="region"
            placeholder="Region/address of project implementation"
            type="text"
          />
          <br />

          <input
            onChange={this.handleChange}
            name="focusproject"
            placeholder="Focus area of project"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="targetgroup"
            placeholder="Target group of Project"
            type="text"
          />
          <br />

          <input
            onChange={this.handleChange}
            name="duration"
            placeholder="Start/End"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="budget"
            placeholder="Budget"
            type="text"
          />
          <br />

          <input
            onChange={this.handleChange}
            name="projectcost"
            placeholder="Project cost/Activity based cost"
            type="text"
          />
          <input
            onChange={this.handleChange}
            name="cost"
            placeholder="Overhead cost (payroll, etc.):Running Costs"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="comment"
            placeholder="Comment"
            type="text"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FundingOpportunities;
