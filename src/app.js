import React from "react";

import Registration from "./registration";
import Login from "./login";
import Navigation from "./navigation";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navigation />
            <Route exact path="/Registration" component={Registration} />
            <Route exact path="/Login" component={Login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
