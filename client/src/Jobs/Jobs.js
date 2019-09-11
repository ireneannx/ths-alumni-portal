import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJobs } from './JobAction'
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../App.css'
import { Icon } from "flwww";




class Jobs extends Component {

  componentDidMount() {
    this.props.getJobs();
  }

  render() {
    console.log("jobs", this.props)
    let { jobs } = this.props;

    return (

      <div>
        <Link to={`${this.props.match.url}/new`}><h1>Add a Job</h1></Link>
        {
          jobs.map((job) => {
            return (
              <JobCard className="card" style={{ "width": "18rem", "height": "70vh" }}>
                <img className="card-img-top" src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title" style={{ "text-align": "center" }} >{job.company_name}</h5>
                  <p className="card-text">{job.job_description}.</p>
                  <p className="card-text">{job.job_type}.</p>
                  <a href={job.url} className="btn" style={{ "background": "#99CC00", "color": "#FFFFFF" }}>Apply Now</a>
                </div>
                <Icon type="thumbUp" />
              </JobCard>
            )
          })
        }


      </div>


    );
  }
}

//mapStateToProps
const mapStateToProps = state => ({
  jobs: state.jobreducer.jobs,
  isLoaded: state.jobreducer.isLoaded,
})

//mapDispatchToProps
const mapDispatchToProps = dispatch => bindActionCreators({ getJobs }, dispatch)

export const JobCard = styled.div`
display: inline-block;
  vertical-align: top;
  width: 226px;
  background-color: #fff;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  position: relative;
  min-height: 320px;
  margin: 10px 10px 7px 10px;
  -webkit-box-shadow: 0 1px 1px 0 rgba(159, 167, 194, 0.6);
  -moz-box-shadow: 0 1px 1px 0 rgba(159, 167, 194, 0.6);
  box-shadow: 0 1px 1px 0 rgba(159, 167, 194, 0.6);
  
`
export const AlignCenter = styled.div`
text-align: center`

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
