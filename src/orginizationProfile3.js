import ReactDOM from "react-dom";
import React, { Component } from "react";
import axios from "./axios";
class OrginizationProfile3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="registration">
        <div className=" registrationInfo">
          <p className="some">
            The more detailed your organization profile is<br /> the better
            fitted will be the funding opportunities that we will find for your
            organization.
          </p>
        </div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            onChange={this.props.handleChange}
            name="org"
            placeholder="Current or Farmer funding Orginization Name"
            type="text"
          />
          <br />
          <input
            onChange={this.props.handleChange}
            name="fundingname"
            placeholder="Current or Farmer funding program Name"
            type="text"
          />
          <br />
          <input
            onChange={this.props.handleChange}
            name="time"
            placeholder="Current or Farmer funding, Start or End"
            type="text"
          />
          <br />
          <input
            onChange={this.props.handleChange}
            name="pic"
            placeholder="EU PIC Number"
            type="text"
          />
          <br />
          <input
            onChange={this.props.handleChange}
            name="comment"
            placeholder="Comment"
            type="text"
          />
          <br />
          <button onClick={event => this.props.goToNextPage(event, 5)}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
export default OrginizationProfile3;
