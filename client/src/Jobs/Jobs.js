import React, { Component } from "react";
import { connect } from "react-redux";
import { getJobs } from "./JobAction";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LikeBar from "./likebar";
import { format } from "timeago.js";
import "../App.css";
class Jobs extends Component {
  state = {
    currentJob: ""
  };
  componentDidMount() {
    this.props.getJobs();
  }
  handleClick = job => {
    this.props.history.push(`/profile/${job.user_id}`);
  };

  handleModal = job => {

    this.setState({
      currentJob: job
    });
  };
  //comment
  render() {
    let { jobs } = this.props;
    if (jobs[0] === null) {
      return (
        <div>
          <h2>Loading</h2>
        </div>
      );
    } else {
      return (
        <div style={{ width: "80%", margin: "0 auto" }}>
          <br />
          <div style={{ textAlign: "center", margin: "auto", padding: "10px" }}>
            <button className="btn btn-secondary" style={{ width: "200px" }}>
              <i className="fa fa-plus" aria-hidden="true"></i>
              <Link to={`${this.props.match.url}/new`} className="white padding">
                Add Job
              </Link>
            </button>
          </div>
          <div className="text-center" style={{ margin: "0 auto" }}>
            <div>
              {jobs.map((job, index) => {
                return (
                  <JobCard
                    key={index}
                    className="card"
                    style={{
                      width: "18rem",
                      overflow: "hidden",
                      margin: "15px"
                    }}
                  >
                    <img
                      className="card-img-top"
                      src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="Card cap"
                    />

                    <LikeBar upvote_count={job} />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{ textAlign: "center" }}
                      >
                        {job.company_name}
                      </h5>
                      <p className="card-text">{job.job_type}.</p>
                      <p className="text-muted">
                        <i
                          className="fa fa-clock"
                          style={{ marginRight: "10px" }}
                        ></i>
                        {format(job.createdAt)}
                      </p>
                      <AlignCenter>
                        <a
                          href={job.url}
                          target="blank"
                          className="btn"
                          style={{
                            background: "#99CC00",
                            color: "#FFFFFF",
                            marginBottom: "10px"
                          }}
                        >
                          Apply Now
                        </a>
                        <span>
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            data-toggle="modal"
                            onClick={() => this.handleModal(job)}
                            data-target="#exampleModalLong"
                          >
                            View Job Description
                          </button>
                        </span>
                      </AlignCenter>
                    </div>
                  </JobCard>
                );
              })}
            </div>
            <Modal job={this.state.currentJob} handleClick={this.handleClick} />
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
});
//mapDispatchToProps
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getJobs }, dispatch);
export const JobCard = styled.div`
  display: inline-block;
  vertical-align: top;
  &::after {
    content: "";
    clear: both;
    display: table;
  }
  margin-right: 10px;
  &:not(:after-child) {
    margin-right: 10px;
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
`;
export const AlignCenter = styled.div`
  text-align: center;
`;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jobs);

const Modal = props => {

  return (
    <div
      className="modal fade"
      id="exampleModalLong"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Job Description
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Posted by: <span onClick={() => props.handleClick(props.job)} data-dismiss="modal" className="user">{props.job.name}</span></p>
            <p>Deadline: {props.job.deadline ? `${new Date(props.job.deadline).getDate()}-${new Date(props.job.deadline).getMonth() + 1}-${new Date(props.job.deadline).getFullYear()}` : "Not specified by author"}</p>

            <p>{props.job.job_description}</p>
          </div>
          <div className="modal-footer">

            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
