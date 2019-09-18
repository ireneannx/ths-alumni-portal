import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router,NavLink, Route, Switch } from "react-router-dom";
import Jobs from "../Jobs/Jobs";
import Posts from "../Feeds/components/feed-area";
class UserProfile extends React.Component {
//   state = {
//     user: []
//   };
//   async componentDidMount() {
//     await this.getUsers();
//   }
//   getUsers = async () => {
//     const res = await axios.get(`/users/${this.props.match.params.id}`);
//     await this.setState({
//       user: res.data
//     });

  
//   };
  render() {
    console.log("coming from redux store 1", this.props.user);
    // console.log("user", this.state.user);
    return (
      <div>
        {/* <h1>LoggedIn</h1> */}
      
      
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
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
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
            <Link
              to={"/edit/" +this.props.user._id}
              className="btn btn-secondary"
            >
              Edit Profile
            </Link>
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
)(UserProfile);
