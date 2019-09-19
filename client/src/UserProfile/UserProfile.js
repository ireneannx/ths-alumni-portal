import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router,NavLink, Route, Switch } from "react-router-dom";
import Jobs from "../Jobs/Jobs";
import Posts from "../Feeds/components/feed-area";
import '../App.css'
class UserProfile extends React.Component {
  render() {
    console.log("coming from redux store 1", this.props.user);
    return (
      <div>
            <div>
              <img
                src={this.props.user.avatarURL}
                style={{ borderRadius: "50%", width: "200px" }}
              ></img>
            </div>
            <div>
              {/* Add pictures */}
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">:</th>
                    <th scope="col">{this.props.user1.name}</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>email</td>
                    <td>:</td>
                    <td>{this.props.user1.email}</td>
                  </tr>
                  <tr>
                    <td>Bio</td>
                    <td>:</td>
                    <td>{this.props.user.bio}</td>
                  </tr>
                  <tr>
                    <td>Company</td>
                    <td>:</td>
                    <td>{this.props.user.current_company}</td>
                  </tr>
                  <tr>
                    <td>Employment Status</td>
                    <td>:</td>
                    <td>
                      {this.props.user.employment_status == true
                        ? "Employed"
                        : "Unemployed"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Add Social Media */}
            <div>
              <a href={this.props.user.twitter} className="black padding">
                <i class="fab fa-twitter fa-2x"></i>
              </a>
              <a href={this.props.user.github} className="black padding">
                <i class="fab fa-github fa-2x"></i>
              </a>
              <a href={this.props.user.linkedIn} className="black padding">
                <i class="fab fa-linkedin fa-2x "></i>
              </a>
            </div>
            <br />
            {this.props.authdata.user.id == this.props.user._id ?  <Link
              to={"/profiles/edit/" +this.props.user._id}
              className="btn btn-secondary"
            >
              Edit Profile
            </Link> : null}
           
          </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.Feed.feeds,
    authdata: state.Auth. authData
  };
};

export default connect(
  mapStateToProps,
  null
)(UserProfile);
