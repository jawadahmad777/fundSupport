import React from "react";
import OrginizationProfile from "./orginizationProfile";
import OrginizationProfile1 from "./orginizationProfile1";
import OrginizationProfile2 from "./orginizationProfile2";
import OrginizationProfile3 from "./orginizationProfile3";
import history from "./history";

// import Registration from "./registration";
// import Login from "./login";
// import Navigation from "./navigation";

import { BrowserRouter, Route, Link, Router } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit0 = this.handleSubmit0.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.handleSubmit3 = this.handleSubmit3.bind(this);
  }

  handleSubmit0(e) {
    e.preventDefault();
    history.push("/firstPage");
  }
  handleSubmit1(e) {
    e.preventDefault();
    history.push("/secondPage");
  }
  handleSubmit2(e) {
    e.preventDefault();
    history.push("/thirdPage");
  }
  handleSubmit3(e) {
    e.preventDefault();
    history.push("/lastPage");
  }

  componentDidMount() {
    history.push("/firstPage");
  }
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Link to="/firstPage">first page </Link>
            <Link to="/secondPage">second page </Link>
            <Link to="/thirdPage">third page </Link>
            <Link to="/lastPage">last page </Link>

            <Route
              path="/firstPage"
              render={() => (
                <OrginizationProfile handleSubmit={this.handleSubmit0} />
              )}
            />

            <Route
              path="/secondPage"
              render={() => (
                <OrginizationProfile1 handleSubmit={this.handleSubmit1} />
              )}
            />

            <Route
              path="/thirdPage"
              render={() => (
                <OrginizationProfile2 handleSubmit={this.handleSubmit2} />
              )}
            />

            <Route
              path="/lastPage"
              render={() => (
                <OrginizationProfile3 handleSubmit={this.handleSubmit3} />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}
