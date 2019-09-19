const initialState = {
  jobs: [],
  isLoaded: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_JOBS":
      return {
        ...state, jobs: action.payload, isLoaded: true
      }
      case "ADD_ID_TO_JOB":
        return {
          ...state, jobs : state.jobs.map((data)=>{
            if(data._id === action.JobId){
              data.upvote_count.push(action.UserId)
            }
          })
        }
    //case ADD_JOB isnt needed since i dont need to change anything in my redux store when I add a job. get jobs will take care of that when the jobs component rerenders 
    default:
      return { ...state }
  }
}