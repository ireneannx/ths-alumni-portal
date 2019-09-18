import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import AddJob from '../Jobs/AddJob'

import Profile from "../UserProfile/Profile";
import Jobs from "../Jobs/Jobs";
import Posts from "../Feeds/components/feed-area";
class LoggedIn extends Component {
  render() {
    console.log("LoggedIn", this.props.posts);
    return (
      <div>
        {/* <h1>LoggedIn</h1> */}
        <div className="row" style={{ marginTop: "10%" }}>
          <div class="col-md-4">
            <Profile />
            {/* <h1>From LoggedIn</h1> */}
          </div>
          <div class="col-md-8">
            <Switch>
            
              <Route exact path="/" component={Jobs} />
              <Route path="/jobs/new" component={AddJob} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default LoggedIn;
