import axios from 'axios'

export const getJobs = () => {
  return async function (dispatch) {

    const res = await axios.get("/jobs");
    // console.log("here is the res for jobs", res)

    return dispatch({
      type: "GET_JOBS",
      payload: res.data
    })
  }
}


export const addJob = (job, history) => {
  return async function (dispatch) {
    //this object includes user_id(who made the post) as well as all the job data contained in job. Will be accessible in the backend in req.body

    console.log('checking author id in frontend', job)

    const res = await axios.post("/jobs", job);

    history.push("/jobs") //this needs to be done in the addJob dispatch function rather than in AddJob.js after we do this.props.getJob(). Otherwise the new job will not get added when we redirect 
    return dispatch({
      type: "ADD_JOB",
      payload: res.data
    })
  }
}

export const frontendLike = (JobId, UserId) => {
  console.log("inside frontendlike", JobId, UserId)
  return function (dispatch) {
    return dispatch({
      type: "ADD_ID_TO_JOB",
      JobId: JobId,
      UserId: UserId
    })
  }
}