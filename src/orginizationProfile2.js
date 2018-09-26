import ReactDOM from "react-dom";
import React, { Component } from "react";
import axios from "./axios";
import history from "./history";
class OrginizationProfile2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // handleSubmit(e) {
  //   e.preventDefault();
  //   axios.post("/registration", this.state).then(resp => {
  //     console.log(resp);
  //     if (resp.data.success) {
  //       this.setState({
  //         isLoggedIn: true
  //       });
  //     }
  //   });
  // }
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
        <form>
          <input
            onChange={this.props.handleChange}
            name="foundation"
            placeholder="Year of Foundation"
            type="text"
          />
          <br />
          <input
            onChange={this.props.handleChange}
            name="employe"
            placeholder="Number of Employes"
            type="text"
          />
          <br />
          <input
            onChange={this.props.handleChange}
            name="volunteers"
            placeholder="Number of volunteers"
            type="text"
          />
          <br />
          <input
            onChange={this.props.handleChange}
            name="mission"
            placeholder="Mission Statement of Your Orginization"
            type="text"
          />
          <br />
          <input
            onChange={this.props.handleChange}
            name="revenue"
            placeholder="Yearly Revenue"
            type="text"
          />

          <button onClick={event => this.props.goToNextPage(event, 4)}>
            Next Page
          </button>
          <button onClick={event => this.props.goToPrvPage(event, 2)}>
            Prv Page
          </button>
        </form>
      </div>
    );
  }
}
export default OrginizationProfile2;
