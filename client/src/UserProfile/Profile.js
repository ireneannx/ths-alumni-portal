import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Profile extends React.Component {
  state = {
    user: []
  };
  async componentDidMount() {
    await this.getUsers();
  }
  getUsers = async () => {
    const res = await axios.get(`/users/${this.props.match.params.id}`);
    await this.setState({
      user: res.data
    });
    
    // console.log("******* user profile dara",this.state.user)
  };
  render() {
<<<<<<< HEAD
    console.log('coming from redux store', this.props);
    // const data = this.state.users;
    //  const feeduser = this.props.feeds.filter()
    // const user = data.filter(data => data._id == this.props.feeds);
    console.log("user", this.state.user);
    // const display = user[0];
    //display = JSON.parse(display)
    // if (this.state.users.length == 0) {
    //   return null;
    // }
    // console.log("display", display._id);
=======
    console.log(this.state.users);
    const data = this.state.users;
    const user = data.filter(data => data._id === "5d78b5e11dc9696cde9b851d");
    console.log("user", user);
    const display = user[0];
    //display = JSON.parse(display)
    if (this.state.users.length === 0) {
      return null;
    } else {
      console.log("display", display._id);
      return (
        <div>
          <div>
            <img src={display.avatarURL} style={{ borderRadius: "50%", width: "200px" }} alt="Avatar"></img>
          </div>
          <div>
            {/* Add pictures */}
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">:</th>
                  <th scope="col">Maria Jamal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bio</td>
                  <td>:</td>
                  <td>{display.bio}</td>
                </tr>
                <tr>
                  <td>Company</td>
                  <td>:</td>
                  <td>{display.current_company}</td>
                </tr>
                <tr>
                  <td>Employment Status</td>
                  <td>:</td>
                  <td>
                    {display.employment_status === true
                      ? "Employed"
                      : "Unemployed"}
                  </td>
                </tr>
>>>>>>> rizwan

    return (
      <div>
        <h1>This is the  user profile</h1>
        <h2>{this.state.user.current_company}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data : state.Feed.feeds
  }
}

export default connect(mapStateToProps, null)(Profile) ;
