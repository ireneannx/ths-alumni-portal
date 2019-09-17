const initialState = {
  isLoggedIn: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "CHANGE_AUTH":
      return {
        ...state, isLoggedIn: !isLoggedIn
      }
    default:
      return { ...state }
  }
}