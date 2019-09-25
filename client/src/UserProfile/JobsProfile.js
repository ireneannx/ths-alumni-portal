import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import "../App.css";
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
        // console.log("for userProfile", res.data);
        // console.log("for userProfile", res1.data);
        this.setState({
          user: res.data,
          user1: res1.data
        });
      });
    });
  }
  render() {
    // console.log("posts profile", this.props);
    // console.log("posts profile 1", this.state.user.jobs);
    if (this.state.user.jobs) {
    return (
      <div>
        {this.state.user.jobs.reverse().map((job,index) => (
           <JobCard key={index} className="card" style={{ "width": "18rem", overflow: "hidden", margin: "15px" }}>
           <img className="card-img-top" src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card cap" />
          
           <LikeBar upvote_count={job} />
           <div className="card-body">
             <h5 className="card-title" style={{ "textAlign": "center" }} >{job.company_name}</h5>
             <p className="card-text">{job.job_type}.</p>
             <AlignCenter>
               <a href={job.url} target="blank" className="btn" style={{ "background": "#99CC00", "color": "#FFFFFF", marginBottom: "10px" }}>Apply Now</a>
               <span><button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#exampleModalLong">
                 View Job Description
       </button></span>
             </AlignCenter>
           </div>
           {/* this is the modal part*/}
           <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
             <div className="modal-dialog" role="document">
               <div className="modal-content">
                 <div className="modal-header">
                   <h5 className="modal-title" id="exampleModalLongTitle">Job Description</h5>
                   <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                   </button>
                 </div>
                 <div className="modal-body">
                   <p>Posted by: <button>click</button></p>
                   <p>{job.job_description}</p>
                 </div>
                 <div className="modal-footer">
                   <p>Deadline: </p>
                   <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
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
