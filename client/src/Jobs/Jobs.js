import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJobs } from './JobAction'
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LikeBar from './likebar';
import { format } from 'timeago.js'
import '../App.css'
class Jobs extends Component {
  state = {
    currentJob: ""
  }
  componentDidMount() {
    console.log("Inside componentDidMount")
    this.props.getJobs();
  }

  handleModal = (job) => {
    console.log("previous state:", this.state.currentJob)
    this.setState({
      currentJob: job
    })
    console.log("current state", this.props.currentJob)
  }
  //comment
  render() {

    let { jobs } = this.props;
    if (jobs[0] === null) {
      return (
        <div>
          <h2>Loading</h2>
        </div>
      )
    } else {
      return (
        <div>
          <div style={{ paddingInlineStart: "15%" }}>
            <Link to={`${this.props.match.url}/new`}><img src="https://cdn4.iconfinder.com/data/icons/simplicio/128x128/document_add.png" height="40rem"></img></Link></div>
          <div className="container text-center" style={{ margin: "0 auto" }}>
            <div>
              {
                jobs.map((job) => {
                  return (
                    <JobCard className="card" style={{ "width": "18rem", overflow: "hidden", margin: "15px" }}>
                      <img className="card-img-top" src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card cap" />
                      {/*IRENE COMMENTED THIS OUT SO I CAN CONTINUE WORKING ON JOBS */}
                      <LikeBar upvote_count={job} />
                      <div className="card-body">
                        <h5 className="card-title" style={{ "text-align": "center" }} >{job.company_name}</h5>
                        <p className="card-text">{job.job_type}.</p>
                        <p className="text-muted"><i class="fa fa-clock" style={{ marginRight: "10px" }}></i>{format(job.createdAt)}</p>
                        <AlignCenter>
                          <a href={job.url} target="blank" className="btn" style={{ "background": "#99CC00", "color": "#FFFFFF", marginBottom: "10px" }}>Apply Now</a>
                          <span><button type="button" class="btn btn-secondary btn-sm" data-toggle="modal" onClick={() => this.handleModal(job)} data-target="#exampleModalLong">
                            View Job Description
                  </button></span>
                        </AlignCenter>

                      </div>
                    </JobCard>
                  )
                })
              }
            </div>
            <Modal job={this.state.currentJob} />

          </div>
        </div>
      );
    }
  }
}
//mapStateToProps
const mapStateToProps = state => ({
  jobs: state.jobreducer.jobs,
  isLoaded: state.jobreducer.isLoaded,
  authData: state.Auth.authData
})
//mapDispatchToProps
const mapDispatchToProps = dispatch => bindActionCreators({ getJobs }, dispatch)
export const JobCard = styled.div`
display: inline-block;
  vertical-align: top;
  &::after{
    content:"";
    clear:both;
    display:table;
  }
  margin-right:10px;
  &:not(:after-child){
    margin-right:10px;
  }
  background-color: #fff;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  position: relative;
  min-height: 320px;
  -webkit-box-shadow: 0 1px 1px 0 rgba(159, 167, 194, 0.6);
  -moz-box-shadow: 0 1px 1px 0 rgba(159, 167, 194, 0.6);
  box-shadow: 0 1px 1px 0 rgba(159, 167, 194, 0.6);
  
`
export const AlignCenter = styled.div`
text-align: center`
export default connect(mapStateToProps, mapDispatchToProps)(Jobs);


const Modal = (props) => {
  console.log("props recieved by modal", props.job)
  return (<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Job Description</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Posted by: {props.job.name}</p>
          <hr></hr>
          <p>{props.job.job_description}</p>
        </div>
        <div class="modal-footer">
          <p>Deadline: </p>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>);
}

