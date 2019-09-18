const initialState = {
  isLoggedIn: false,
  authData: {} 
}


const Auth = function (state = initialState, action) {
  switch (action.type) {
    case "CHANGE_AUTH":
      return {
        ...state, authData: action.payload, isLoggedIn: !state.isLoggedIn
      }
    case "CHANGE_AUTH_STATE":
      return {
        ...state, isLoggedIn: false
      }
    default:
      return { ...state }
  }
}

export default Auth