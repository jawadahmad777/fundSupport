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
    axios.post("/fundingOpportunities", this.state).then(resp => {
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
          <h1>Fundding opportunities Profile here!</h1>
        </div>
        <form onSubmit={this.handleSubmit2}>
          <input
            onChange={this.handleChange}
            name="orginizationsName"
            placeholder="Orginizations"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="focusAreas"
            placeholder="Focus Areas"
            type="text"
          />
          <br />

          <input
            onChange={this.handleChange}
            name="legalForms"
            placeholder="Legal Forms"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="types"
            placeholder="Types"
            type="text"
          />
          <br />

          <input
            onChange={this.handleChange}
            name="reagions"
            placeholder="Regions"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="contacts"
            placeholder="contacts"
            type="text"
          />
          <br />

          <input
            onChange={this.handleChange}
            name="minFunding"
            placeholder="Min Funding"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="minFundingDescription"
            placeholder="Min Funding Description"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="mixFunding"
            placeholder="Mix Funding"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="mixFundingDescription"
            placeholder="Min Funding Description"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="startDate"
            placeholder="Start Date"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="endDate"
            placeholder="End Date"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="duration"
            placeholder="Duration"
            type="text"
          />
          <br />

          <select name="durationType" onChange={this.handleChange}>
            <option value="durationType">Duration Type</option>
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
            <option value="years">Years</option>
          </select>

          <br />
          <input
            onChange={this.handleChange}
            name="deadline"
            placeholder="Deadline"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="ownShare"
            placeholder="Own Share"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="details"
            placeholder="details"
            type="text"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FundingOpportunities;
