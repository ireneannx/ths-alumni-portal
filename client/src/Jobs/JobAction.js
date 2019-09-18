import axios from 'axios'

export const getJobs = () => {
  return async function (dispatch) {

    const res = await axios.get("http://localhost:7000/jobs");
    console.log("here is the res for jobs", res)

    return dispatch({
      type: "GET_JOBS",
      payload: res.data
    })
  }
}


export const addJob = (job, history, user_id) => {
  return async function (dispatch) {
    //this object includes user_id(who made the post) as well as all the job data contained in job. Will be accessible in the backend in req.body

    job.user_id = user_id // adding user_id key value pair to job

    const res = await axios.post("/jobs", job);

    history.push("/jobs") //this needs to be done in the addJob dispatch function rather than in AddJob.js after we do this.props.getJob(). Otherwise the new job will not get added when we redirect 
    return dispatch({
      type: "ADD_JOB",
      payload: res.data
    })
  }
}