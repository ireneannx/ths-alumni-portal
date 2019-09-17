import axios from 'axios'

export const getJobs = () => {
  return async function (dispatch) {

    const res = await axios.get("http://localhost:4000/jobs");
    console.log("here is the res for jobs", res)

    return dispatch({
      type: "GET_JOBS",
      payload: res.data
    })
  }
}


export const addJob = (job, history) => {
  return async function (dispatch) {

    const res = await axios.post("http://localhost:4000/jobs", job);
    console.log("here is the res for jobs", res)
    history.push("/jobs") //this needs to be done in the addJob dispatch function rather than in AddJob.js after we do this.props.getJob(). Otherwise the new job will not get added when we redirect 
    return dispatch({
      type: "ADD_JOB",
      payload: res.data
    })
  }
}