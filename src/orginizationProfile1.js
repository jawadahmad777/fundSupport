import ReactDOM from "react-dom";
import React, { Component } from "react";
import axios from "./axios";
import history from "./history";
class OrginizationProfile1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <form>
          <input
            onChange={this.props.handleChange}
            name="email"
            placeholder="Orginization Email"
            type="text"
          />
          <br />
          <input
            onChange={this.props.handleChange}
            name="phone"
            placeholder="Phone"
            type="text"
          />
          <br />
          <input
            onChange={this.props.handleChange}
            name="website"
            placeholder="Website"
            type="text"
          />
          <br />
          <input
            onChange={this.props.handleChange}
            name="fields"
            placeholder="Fields of Activities"
            type="text"
          />

          <button onClick={event => this.props.goToNextPage(event, 3)}>
            Next Page
          </button>
        </form>
      </div>
    );
  }
}
export default OrginizationProfile1;
