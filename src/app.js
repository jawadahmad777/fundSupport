import React from "react";
import OrginizationProfile from "./orginizationProfile";
import OrginizationProfile1 from "./orginizationProfile1";
import OrginizationProfile2 from "./orginizationProfile2";
import OrginizationProfile3 from "./orginizationProfile3";
import axios from "./axios";
import history from "./history";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.goToNextPage = this.goToNextPage.bind(this);
    this.handleChange = this.handleChange.bind(this);

    console.log("are you there?");
  }
  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        console.log("The whole state is here ", this.state);
      }
    );
  }

  goToNextPage(e, pageNum) {
    e.preventDefault();
    if (pageNum == 1) {
      history.push("/firstPage");
    } else if (pageNum == 2) {
      history.push("/secondPage");
    } else if (pageNum == 3) {
      history.push("/thirdPage");
    } else if (pageNum == 4) {
      history.push("/lastPage");
    } else if (pageNum == 5) {
      axios.post("/orginizationProfile", this.state).then(resp => {
        console.log(resp);
        if (resp.data.success) {
          this.setState({
            isLoggedIn: true
          });
        }
      });
    }
  }

  componentDidMount() {
    history.push("/firstPage");
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <div className="navigation1">
              <Link to="/firstPage">first page </Link>
              <Link to="/secondPage">second page </Link>
              <Link to="/thirdPage">third page </Link>
              <Link to="/lastPage">last page </Link>
            </div>
            <Route
              path="/firstPage"
              render={() => (
                <OrginizationProfile
                  handleChange={this.handleChange}
                  goToNextPage={this.goToNextPage}
                />
              )}
            />

            <Route
              path="/secondPage"
              render={() => (
                <OrginizationProfile1
                  handleChange={this.handleChange}
                  goToNextPage={this.goToNextPage}
                />
              )}
            />
            <Route
              path="/thirdPage"
              render={() => (
                <OrginizationProfile2
                  handleChange={this.handleChange}
                  goToNextPage={this.goToNextPage}
                />
              )}
            />
            <Route
              path="/lastPage"
              render={() => (
                <OrginizationProfile3
                  handleChange={this.handleChange}
                  goToNextPage={this.goToNextPage}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}
