import React from "react";

import { HashRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Registration from "./registration";
import Login from "./login";
function Welcome() {
  return (
    <div className="Registration">
      <HashRouter>
        <div>
          <div className="navigation">
            <Link to="/login">Login</Link>
            <Link to="/registration">Register</Link>
          </div>
          <Route exact path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
        </div>
      </HashRouter>
    </div>
  );
}

export default Welcome;
