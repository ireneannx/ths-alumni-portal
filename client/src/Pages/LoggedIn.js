import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
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
          </div>
          <div class="col-md-8">
            <Switch>
              <Route path="/jobs" component={Jobs} />
              <Route path="/posts" component={Posts} />
              <Route exact path="/" component={Jobs} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default LoggedIn;
