import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Profile extends Component {
  state = {
    users: []
  };
  async componentDidMount() {
    this.getUsers();
  }
  getUsers = async () => {
    const res = await axios.get("/api/users");
    this.setState({
      users: res.data
    });
  };
  render() {
    console.log(this.state.users);
    const data = this.state.users;
    const user = data.filter(data => data._id == "5d78b5e11dc9696cde9b851d");
    console.log("user", user);
    const display = user[0];
    //display = JSON.parse(display)
    if (this.state.users.length == 0) {
      return null;
    }
    console.log("display", display._id);
    return (
      <div>
        <div>
          <img src={display.avatarURL} style={{borderRadius:"50%", width:"200px"}}></img>
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
                  {display.employment_status == true
                    ? "Employed"
                    : "Unemployed"}
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
        {/* Add Social Media */}
        <div>
        <a href={display.twitter} className="black padding"><i class="fab fa-twitter fa-2x"></i></a>
        <a href={display.github} className="black padding"><i class="fab fa-github fa-2x"></i></a>
        <a href={display.linkedIn} className="black padding"><i class="fab fa-linkedin fa-2x "></i></a>

        </div>
        <br/>
        <Link to={"/edit/" + display._id} className="btn btn-secondary">
          Edit Profile
        </Link>
      </div>
    );
  }
}

export default Profile;
