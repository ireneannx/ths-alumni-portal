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
    default:
      return { ...state }
  }
}