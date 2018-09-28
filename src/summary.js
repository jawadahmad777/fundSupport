import ReactDOM from "react-dom";
import ProjectProfile from "./projectProfile";
import React, { Component } from "react";
import axios from "./axios";
class Summary extends Component {
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
          <h1>The more detailed Summary.</h1>
        </div>
        <form onSubmit={this.props.handleSubmit}>
          <textarea
            placeholder="Write a summary of 500 words please"
            name="summary"
            onChange={this.props.handleChange}
          />
          <br />
          <button onClick={event => this.props.goToNextPage(event, 7)}>
            Sign Up
          </button>
        </form>
        <br />
      </div>
    );
  }
}
export default Summary;
