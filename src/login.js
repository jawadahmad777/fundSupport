import React, { Component } from "react";
import axios from "./axios";
// import OrginizationProfile from "./orginizationProfile";
import App from "./app";
class Login extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state);
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.post("/login", this.state).then(resp => {
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
      <div className="login">
        <h1 className="registrationInfo">Login here</h1>
        <form onSubmit={this.handleSubmit}>
          <br />
          <input
            onChange={this.handleChange}
            name="email"
            placeholder="Email"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="password"
            placeholder="Password"
            type="password"
          />
          <br />
          <button type="submit">LogIn</button>
        </form>
      </div>
    );
  }
}

export default Login;
