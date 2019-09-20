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
import styled from 'styled-components';
import Jobs from "../Jobs/Jobs";
import Posts from "../Feeds/components/feed-area";
import "../App.css";
import { format } from 'timeago.js'
import {JobCard, AlignCenter} from '../Jobs/Jobs'
import LikeBar from '../Jobs/likebar';

class JobsProfile extends React.PureComponent {
  state = {
    user: [],
    user1: []
  };

  componentDidMount() {
    this.setState({
      user: [],
      user1: []
    });
    axios.get(`/users/${this.props.userId}`).then(res => {
      axios.get(`/user/${this.props.userId}`).then(res1 => {
        console.log("for userProfile", res.data);
        console.log("for userProfile", res1.data);
        this.setState({
          user: res.data,
          user1: res1.data
        });
      });
    });
  }
  render() {
    console.log("posts profile", this.props);
    console.log("posts profile 1", this.state.user.jobs);
    if (this.state.user.jobs) {
    return (
      <div>
        {this.state.user.jobs.reverse().map(job => (
           <JobCard className="card" style={{ "width": "18rem", overflow: "hidden", margin: "15px" }}>
           <img className="card-img-top" src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card cap" />
           {/*IRENE COMMENTED THIS OUT SO I CAN CONTINUE WORKING ON JOBS */}
           <LikeBar upvote_count={job} />
           <div className="card-body">
             <h5 className="card-title" style={{ "text-align": "center" }} >{job.company_name}</h5>
             <p className="card-text">{job.job_type}.</p>
             <AlignCenter>
               <a href={job.url} target="blank" className="btn" style={{ "background": "#99CC00", "color": "#FFFFFF", marginBottom: "10px" }}>Apply Now</a>
               <span><button type="button" class="btn btn-secondary btn-sm" data-toggle="modal" data-target="#exampleModalLong">
                 View Job Description
       </button></span>
             </AlignCenter>
           </div>
           {/* this is the modal part*/}
           <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
             <div class="modal-dialog" role="document">
               <div class="modal-content">
                 <div class="modal-header">
                   <h5 class="modal-title" id="exampleModalLongTitle">Job Description</h5>
                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                   </button>
                 </div>
                 <div class="modal-body">
                   <p>Posted by: <button>click</button></p>
                   <p>{job.job_description}</p>
                 </div>
                 <div class="modal-footer">
                   <p>Deadline: </p>
                   <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                 </div>
               </div>
             </div>
           </div>
         </JobCard>
        ))}
      </div>
    );
} else {
    return(
        <div>
           <h1>no data</h1> 
        </div>
    )
}
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
)(JobsProfile);
