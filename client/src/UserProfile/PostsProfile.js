import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import "../App.css";
import { format } from "timeago.js";

class PostsProfile extends React.PureComponent {
  state = {
    user: [],
    user1: []
  };

  componentDidMount() {
    this.setState({
      user: [],
      user1: []
    });
    axios.get(`/users/${this.props.userId}`).then(res => {
      axios.get(`/user/${this.props.userId}`).then(res1 => {
        // console.log("for userProfile", res.data);
        // console.log("for userProfile", res1.data);
        this.setState({
          user: res.data,
          user1: res1.data
        });
      });
    });
  }
  render() {
    console.log("posts profile", this.props);
    console.log("posts profile 1", this.state.user.posts);
    if (this.state.user.posts) {
      return (
        <div>
          {this.state.user.posts.reverse().map(posts => (
            <div>
            <div style={{width:"90%"}} className="center">
              <div className="card gedf-card center">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mr-2">
                        <img
                          className="rounded-circle"
                          width="45"
                          src="https://picsum.photos/50/50"
                          alt=""
                        />
                      </div>
                      <div className="ml-2">
                        <div className="h5 m-0">{posts.name}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body left">
                  <div className="left" key={posts._id}>{posts.content}</div>
                </div>
                <div className="card-footer">
                  <div className="left">
                    <p className="card-link">
                      <i className="fa fa-thumbs-up"></i> Like
                    </p>
                  </div>
                  <div className="text-muted h7 mb-2 right">
                    <i className="fa fa-clock" style={{ marginRight: "10px" }}></i>
                    {format(posts.createdAt)}
                  </div>
                </div>
              </div>
              <br/>
            </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h1>no data</h1>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state.Feed.feeds,
    authdata: state.Auth.authData
  };
};

export default connect(
  mapStateToProps,
  null
)(PostsProfile);
