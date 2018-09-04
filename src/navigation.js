import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Registration from "./registration";
import Login from "./login";

export default function Navigation() {
  return (
    <div>
      <div className="navigation">
        <li>
          <Link to="/registration">Registration</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </div>
    </div>
  );
}
