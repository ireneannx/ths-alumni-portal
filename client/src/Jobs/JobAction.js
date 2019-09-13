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