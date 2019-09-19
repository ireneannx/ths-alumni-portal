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
  state = {
    user: [],
    user1:[]
  };
  async componentDidMount() {
    await this.getUsers();
  }
  getUsers = async () => {
    const res = await axios.get(`/users/${this.props.match.params.id}`);
    const res1 = await axios.get(`/user/${this.props.match.params.id}`)
    await this.setState({
      user: res.data,
      user1: res1.data
    });
  };
  render() {
    return (
      <div>
        <div className="row" style={{ marginTop: "10%" }}>
          <div class="col-md-4">
            <UserProfile user={this.state.user} user1={this.state.user1}/>
          </div>
          <div class="col-md-8">
            <Link to={{pathname:`/profiles/jobs`}}>Jobs</Link>
            <Link to={{pathname:`/profiles/posts`}} >Posts</Link>
            <Switch>
              <Route path="/profiles/jobs" component={JobsProfile} />
              <Route path="/profiles/posts" user1={this.state.user1} component={PostsProfile}  />
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
