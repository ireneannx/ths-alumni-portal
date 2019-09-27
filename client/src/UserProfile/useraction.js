export const addUserDetails = (data) => async dispatch => {
    dispatch({
        type: "ADD_USER_DETAILS",
        payload: data
    })
}