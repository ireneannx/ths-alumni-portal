import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addJob, getJobs } from './JobAction';
import { bindActionCreators } from 'redux';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";

//import axios from 'axios'

class AddJob extends Component {
  state = {
    deadline: new Date(),
    company_name: "",
    job_type: "",
    job_description: "",
    url: "",
    user_id: this.props.data.user._id,
    name: this.props.data.user.name
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

    await this.props.addJob(this.state, this.props.history)



  }
  render() {
    // console.log("props from AddJob", this.props);
    return (
      <div className="">
        <div className="container contact" style={{
          marginTop: "5%",
          justifyContent: "center"
        }}>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-3" style={{ backgroundImage: "url('https://cms-assets.tutsplus.com/uploads/users/107/posts/26488/image/41-space-scrolling-background850.jpg')" }}>


              </div>


              <div className="col-md-9">
                <div className="contact-form">
                  <div className="form-group">
                    <label className="control-label col-sm-2">Company</label>
                    <div className="col-sm-10">
                      <input type="text" name="company_name" value={this.state.company_name} className="form-control" placeholder="enter company name" onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-3">Available Position/s</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" value={this.state.job_type} name="job_type" placeholder="Eg: Front-end" onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-3" >Job Description</label>
                    <div className="col-sm-10">
                      <textarea className="form-control" rows="5" id="comment" name="job_description" value={this.state.job_description} onChange={this.handleChange}></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-3">Application link</label>
                    <div className="col-sm-10">
                      <input className="form-control" placeholder="Enter application url or company website" name="url" onChange={this.handleChange} value={this.state.url} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-3" >Deadline</label>
                    <div className="col-sm-10">
                      <DatePicker className="col-sm-3 form-group"
                        dateFormat="MMMM d, yyyy"
                        selected={this.state.deadline}
                        onChange={this.handleChange2}
                        minDate={new Date()}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button type="submit" className="btn btn-secondary">Submit</button>
                      <Link to="/jobs"><button type="button" className="btn btn-danger" style={{ marginLeft: "5px" }}>Cancel</button></Link>
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