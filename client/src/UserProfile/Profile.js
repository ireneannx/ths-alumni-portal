import React from "react";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";
import JobsProfile from "./JobsProfile";
import PostsProfile from "./PostsProfile";
// import ReactGithubCalendar from '@axetroy/react-github-calendar';
// import GitHubCalendar from 'react-github-calendar'
import '../App.css'
class Profile extends React.Component {
  state = {
    jobs: true,
    loading: false
  };
  componentDidMount() {
    console.log("cdidmount")
    this.setState({
      loading: true
    })
  }
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
    // console.log('for calender', this.props.userProfile)
    return (
      <div>

        {/* <div className="js-contribution-graph">

          <ReactGithubCalendar name="tom" />

          <GitHubCalendar username="rizwanaman5" />

        </div> */}

        <div className="container">
          <div className="box">
            <div className="row">
              <div className="col-md-4">
                <div className="container">
                  <div className="box">
                    <UserProfile userId={this.props.match.params.id} />
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                {/* <br/> */}
                <div className="btn-group center jobpostbtn" role="group" aria-label="Basic example" style={{ width: "100%", margin: "0 auto" }}>
                  <button type="button" className="btn btn-secondary" onClick={this.onHandleJobs}>Jobs
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={this.onHandlePosts}>
                    Posts
                  </button>

                </div>

                <div className="conatiner">

                  {this.state.jobs === true ? (
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
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.Feed.feeds,
    userProfile: state.userProfile.userProfile
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
