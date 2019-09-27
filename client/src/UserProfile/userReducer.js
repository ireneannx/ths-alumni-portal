const initialState = {
    userProfile: []
}

const userProfile = function (state = initialState, action) {
    switch (action.type) {
        case "ADD_USER_DETAILS":
            return {
                ...state, userProfile: action.payload
            }
        default:
            return { ...state }
    }
}

export default userProfile