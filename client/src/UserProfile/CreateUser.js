import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class CreateUserProfile extends Component {
  state = {
    bio: "",
    current_company: "",
    employment_status: "",
    avatarURL: "",
    github: "",
    twitter: "",
    linkedIn: "",
    editing: false,
    _id: ""
  };
  componentWillMount() {
    if (this.props.match.params.id) {
      this.setState({
        editing: true
      });
    }
  }

  async componentDidMount() {
    if (this.props.match.params.id) {
      console.log("line 22", this.props.match.params.id);
      const url = `/api/users/${this.props.match.params.id}`;
      console.log("line24", url);
     
      const res = await axios.get(url);
      this.setState({
        editing: true,
        bio: res.data.bio,
        current_company: res.data.current_company,
        date: new Date(res.data.date),
        employment_status: res.data.employment_status,
        avatarURL: res.data.avatarURL,
        github: res.data.github,
        twitter: res.data.twitter,
        linkedIn: res.data.linkedIn,
        _id: res.data._id
      });
      console.log("rizwan",this.state)
    }
  }
  onSubmit = async e => {
    e.preventDefault();
    if (this.state.editing) {
      const updatedUser = {
        bio: this.state.bio,
        current_company: this.state.current_company,
        employment_status: this.state.employment_status,
        avatarURL: this.state.avatarURL,
        github: this.state.github,
        twitter: this.state.twitter,
        linkedIn: this.state.linkedIn,
        date: this.state.date
      };
      
      const url = `/api/users/${this.state._id}`;
      await axios.put(url, updatedUser);
    } else {
      const newUser = {
        bio: this.state.bio,
        current_company: this.state.current_company,
        employment_status: this.state.employment_status,
        avatarURL: this.state.avatarURL,
        github: this.state.github,
        twitter: this.state.twitter,
        linkedIn: this.state.linkedIn,
        date: this.state.date
      };
      axios.post("/api/users", newUser);
    }
    window.location.href = "/";
  };
  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeDate = date => {
    this.setState({ date });
  };
  render() {
    console.log("editing", this.state.editing);
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Edit User Details</h4>
          <form onSubmit={this.onSubmit}>
            {/* User bio */}
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                placeholder="Bio"
                name="bio"
                onChange={this.onInputChange}
                value={this.state.bio}
              ></textarea>
            </div>
            {/* User Current Company */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Current Company"
                onChange={this.onInputChange}
                name="current_company"
                value={this.state.current_company}
              />
            </div>
            {/* avatarURL */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="avatarURL"
                name="avatarURL"
                onChange={this.onInputChange}
                value={this.state.avatarURL}
              />
            </div>
            {/* employment_status */}
            <div class="input-group mb-3">
              <select
                class="custom-select"
                id="inputGroupSelect01"
                name="employment_status"
                onChange={this.onInputChange}
              >
                <option selected>Choose</option>
                <option value="true">Employed</option>
                <option value="false">Unemployed</option>
              </select>
            </div>
            {/* github */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Github URL here"
                name="github"
                onChange={this.onInputChange}
                value={this.state.github}
              />
            </div>
            {/* twitter */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Twitter URL here"
                name="twitter"
                onChange={this.onInputChange}
                value={this.state.twitter}
              />
            </div>
            {/* linkedIn */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="LinkedIn URL here"
                name="linkedIn"
                onChange={this.onInputChange}
                value={this.state.linkedIn}
              />
            </div>
            <button className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    );
  }
}
