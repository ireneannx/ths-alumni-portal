import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addJob, getJobs } from './JobAction';
import { bindActionCreators } from 'redux';
import '../App.css';
import Jobs from './Jobs'

import "react-datepicker/dist/react-datepicker.css";

//import axios from 'axios'

class AddJob extends Component {
  state = {
    deadline: new Date(),
    company_name: "",
    job_type: "",
    job_description: "",
    url: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChange2 = date => {
    this.setState({
      deadline: date
    });
  };


  handleSubmit = async e => {
    //should push using axios.push from here INCLUDING startDate
    e.preventDefault();
    //accessing userID from the redux store props

    if (this.props.data.user == 1) {
      var user_id = this.props.data.user._id
    }

    await this.props.addJob(this.state, this.props.history, user_id)



  }
  render() {
    console.log("props from AddJob", this.props);
    return (
      <div className="">
        <div class="container contact" style={{
          marginTop: "5%",
          justifyContent: "center"
        }}>
          <form onSubmit={this.handleSubmit}>
            <div class="row">
              <div class="col-md-3" style={{ backgroundImage: "url('https://cms-assets.tutsplus.com/uploads/users/107/posts/26488/image/41-space-scrolling-background850.jpg')" }}>


              </div>


              <div class="col-md-9">
                <div class="contact-form">
                  <div class="form-group">
                    <label class="control-label col-sm-2">Company</label>
                    <div class="col-sm-10">
                      <input type="text" name="company_name" value={this.state.company_name} class="form-control" placeholder="enter company name" onChange={this.handleChange} />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3">Available Position/s</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" value={this.state.job_type} name="job_type" placeholder="Eg: Front-end" onChange={this.handleChange} />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3" >Job Description</label>
                    <div class="col-sm-10">
                      <textarea class="form-control" rows="5" id="comment" name="job_description" value={this.state.job_description} onChange={this.handleChange}></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3">Application link</label>
                    <div class="col-sm-10">
                      <input class="form-control" placeholder="Enter application url or company website" name="url" onChange={this.handleChange} value={this.state.url} />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3" >Deadline</label>
                    <div class="col-sm-10">
                      <DatePicker class="col-sm-2 form-group"
                        selected={this.state.deadline}
                        onChange={this.handleChange2}

                        minDate={new Date()}
                      />
                    </div>
                  </div>


                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <button type="submit" class="btn btn-secondary">Submit</button>
                      <Link to="/jobs"><button type="button" class="btn btn-danger" style={{ marginLeft: "5px" }}>Cancel</button></Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    data: state.Auth.authData //redux store with user_id
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addJob, getJobs }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddJob);