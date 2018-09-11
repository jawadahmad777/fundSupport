import React from "react";
import OrginizationProfile from "./orginizationProfile";
// import Registration from "./registration";
// import Login from "./login";
// import Navigation from "./navigation";
// import { BrowserRouter, Route } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <OrginizationProfile />
      </div>
    );
  }
}
