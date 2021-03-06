import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class UpdateDetails extends Component {
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

  async componentDidMount() {
    if (this.props.match.params.id) {
      const res = await axios.get(`/users/${this.props.match.params.id}`);
      await this.setState({
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

      const url = `/users/${this.state._id}`;
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
      axios.post("/users", newUser);
    }
    window.location.href = `/user/profile/${this.props.match.params.id}`;
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

    return (
      <div className="col-md-6 offset-md-3" style={{ marginTop: "20vh" }}>
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
            <div className="input-group mb-3">
              <select
                className="custom-select"
                id="inputGroupSelect01"
                name="employment_status"
                value={this.state.employment_status}
                onChange={this.onInputChange}
              >
                <option >Choose</option>
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
