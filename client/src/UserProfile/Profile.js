import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import Jobs from "../Jobs/Jobs";
import Posts from "../Feeds/components/feed-area";
import UserProfile from "./UserProfile";
import JobsProfile from "./JobsProfile";
import PostsProfile from "./PostsProfile";
import '../App.css'
class Profile extends React.Component {
  state = {
    jobs: true
  };
  onHandleJobs = () => {
    this.setState({
      jobs: true
    });
  };
  onHandlePosts = () => {
    this.setState({
      jobs: false
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="box">
            <div className="row">
              <div class="col-md-4">
                <div className="container">
                  <div className="box">
                    <UserProfile userId={this.props.match.params.id}/>
                  </div>
                </div>
              </div>
              <div class="col-md-8 ">
                <div class="btn-group right" role="group" aria-label="Basic example">
                  <button type="button" class="btn">
                  <Link onClick={this.onHandleJobs}>Jobs</Link>
                  </button>
                  <button type="button" class="btn ">
                  <Link onClick={this.onHandlePosts}>Posts</Link>
                  </button>
                 
                </div>
                <br/>
                <br/>
               
               
                <div className="conatiner">
                  <div className="box">
                    {this.state.jobs == true ? (
                      <JobsProfile userId={this.props.match.params.id} />
                    ) : (
                      <PostsProfile userId={this.props.match.params.id} />
                    )}
                  </div>
                </div>
              </div>
            </div>
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
