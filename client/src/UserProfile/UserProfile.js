import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { addUserDetails } from './useraction';

import "../App.css";
class UserProfile extends React.Component {
  state = {
    user: [],
    user1: []
  };
  /**
   * user has all jobs and feeds data (linked to userProfile Schema)
   * and user1 has data regarding name, email and (linked to user Schema)
   */
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
      this.props.addUserDetails(res.data)
    });
  }
  async componentDidUpdate(nextProps) {
    if (nextProps.userId !== this.props.userId) {
      const res = await axios.get(`/users/${nextProps.userId}`);
      const res1 = await axios.get(`/user/${nextProps.userId}`);
      await this.setState({
        user: res.data,
        user1: res1.data
      });
    }
  }

  render() {
    const { user, user1 } = this.state;
    return (
      <div style={{ marginTop: "20%" }}>
        {/* CARD */}
        <div className="card center card-footer" style={{ width: "100%" }}>
          <br />
          <img
            src={this.state.user.avatarURL}
            height="80%"
            style={{ width: "80%" }}
            className="card-img-top center"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title center">{user1.name}</h5>
            <br />
            <p className="card-text center">{user.bio}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item center">{user1.email}</li>
            <li className="list-group-item center">
              {user.employment_status === true ? "Employed" : "Unemployed"}
            </li>
            {user.employment_status === true ? (
              <li className="list-group-item center">{user.current_company}</li>
            ) : null}
          </ul>

          <div className="card-body center">
            {user.twitter ? (
              <a href={user.twitter} className="card-link black" target="blank" >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            ) : null}
            {user.github ? (
              <a href={user.github} className="card-link black" target="blank">
                <i className="fab fa-github fa-2x"></i>
              </a>
            ) : null}
            {user.linkedIn ? (
              <a href={user.linkedIn} className="card-link black" target="blank" >
                <i className="fab fa-linkedin fa-2x "></i>
              </a>
            ) : null}
          </div>
        </div>
        <br />
        <div className="center">
          {this.props.authdata.user._id === this.props.userId ? (
            <Link
              to={"/profile/edit/" + user._id}
              className="btn btn-secondary"
            >
              Edit Profile
            </Link>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.Feed.feeds,
    authdata: state.Auth.authData,
    userDetails: state.userProfile.userProfile
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addUserDetails
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

