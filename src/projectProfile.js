import ReactDOM from "react-dom";
import React, { Component } from "react";
import axios from "./axios";
import history from "./history";
import { BrowserRouter, Route } from "react-router-dom";

class ProjectProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <form>
          <input
            onChange={this.props.handleChange}
            name="projectname"
            placeholder="Name of Project"
            type="text"
          />
          <br />
          <input
            onChange={this.props.handleChange}
            name="region"
            placeholder="Region/address of project implementation"
            type="text"
          />
          <br />

          <input
            onChange={this.props.handleChange}
            name="focusproject"
            placeholder="Focus area of project"
            type="text"
          />
          <br />
          <input
            onChange={this.props.handleChange}
            name="targetgroup"
            placeholder="Target group of Project"
            type="text"
          />
          <br />

          <input
            onChange={this.props.handleChange}
            name="duration"
            placeholder="Start/End"
            type="text"
          />
          <br />
          <input
            onChange={this.props.handleChange}
            name="budget"
            placeholder="Budget"
            type="text"
          />
          <br />

          <input
            onChange={this.props.handleChange}
            name="projectcost"
            placeholder="Project cost/Activity based cost"
            type="text"
          />
          <input
            onChange={this.props.handleChange}
            name="cost"
            placeholder="Overhead cost (payroll, etc.):Running Costs"
            type="text"
          />
          <br />
          <input
            onChange={this.props.handleChange}
            name="comment"
            placeholder="Comment"
            type="text"
          />
          <button
            type="button"
            onClick={event => this.props.goToNextPage(event, 6)}
          >
            Next Page
          </button>
        </form>
      </div>
    );
  }
}

export default ProjectProfile;
//<button type="submit">Submit</button>
