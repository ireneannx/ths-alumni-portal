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
import "../App.css";
class UserProfile extends React.Component {
  state = {
    user: [],
    user1:[]
  };
  componentDidMount() {
    this.setState({
      user: [],
      user1:[]
    })
    axios.get(`/users/${this.props.userId}`)
      .then(res =>{
        axios.get(`/user/${this.props.userId}`)
        .then(res1 =>{
          this.setState({
            user: res.data,
            user1: res1.data
          });
        })
      })
  }
  async componentWillReceiveProps(nextProps){
    const res = await axios.get(`/users/${nextProps.userId}`);
    const res1 = await axios.get(`/user/${nextProps.userId}`)
    await this.setState({
      user: res.data,
      user1: res1.data
    });
    console.log(res.data)
    console.log(res1.data)
  }
  render() {
    const {user, user1} = this.state; 
    return (
      <div>
        <div>
          <img
            src={this.state.user.avatarURL}
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
                <th scope="col">{user1.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>email</td>
                <td>:</td>
                <td>{user1.email}</td>
              </tr>
              <tr>
                <td>Bio</td>
                <td>:</td>
                <td>{user.bio}</td>
              </tr>
              <tr>
                <td>Company</td>
                <td>:</td>
                <td>{user.current_company}</td>
              </tr>
              <tr>
                <td>Employment Status</td>
                <td>:</td>
                <td>
                  {user.employment_status == true
                    ? "Employed"
                    : "Unemployed"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Add Social Media */}
        <div>
          <a href={user.twitter} className="black padding">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a href={user.github} className="black padding">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a href={user.linkedIn} className="black padding">
            <i class="fab fa-linkedin fa-2x "></i>
          </a>
        </div>
        <br />
        {this.props.authdata.user.id == this.props.userId ? (
          <Link
            to={"/profiles/edit/" + user._id}
            className="btn btn-secondary"
          >
            Edit Profile
          </Link>
        ) : null}
      </div>
    );
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
)(UserProfile);
