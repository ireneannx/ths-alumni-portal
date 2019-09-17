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
    history.push("/jobs")
    return dispatch({
      type: "ADD_JOB",
      payload: res.data
    })
  }
}