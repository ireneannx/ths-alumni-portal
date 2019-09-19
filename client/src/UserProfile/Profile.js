import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router,NavLink, Route, Switch } from "react-router-dom";
import Jobs from "../Jobs/Jobs";
import Posts from "../Feeds/components/feed-area";
import UserProfile from "./UserProfile";
import JobsProfile from "./JobsProfile"
import PostsProfile from "./PostsProfile"
class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="row" style={{ marginTop: "10%" }}>
          <div class="col-md-4">
            <UserProfile userId={this.props.match.params.id}/>
          </div>
          <div class="col-md-8">
            <Link to={{pathname:`/profiles/jobs`}}>Jobs</Link>
            <Link to={{pathname:`/profiles/posts`}} >Posts</Link>
            <Switch>
              <Route path="/profiles/jobs" component={JobsProfile} />
              <Route path="/profiles/posts" component={PostsProfile}  />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.Feed.feeds
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
