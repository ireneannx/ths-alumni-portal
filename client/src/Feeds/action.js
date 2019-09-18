import axios from "axios"

export function getFeedPosts() {

    return async function (dispatch) {
        axios.defaults.headers.common['Authorization'] =  localStorage.getItem('thsToken')
        const res = await axios.get('/posts')
        return dispatch({
            type: "GET",
            payload: res.data
        })
    }
}
export function getAuthorData(author){
    return async function(dispatch){
        const res = await axios.get(`/api/users/${author}`)
    return dispatch({
        type: "GET USER",
        payload:res.data
    })
    }
}
export function addFeedPost(data) {
    console.log('recieved by action', data)

    let text = {
        content: data
    }

    return async function (dispatch) {
        await axios.post('/posts', text, {
            headers: {
                "Authorization": localStorage.getItem('thsToken')
            }
        }) //user id needs to be attached here 
            .then(() => {
                return dispatch({
                    type: "ADD",
                    payload: data
                })
            })
            .catch((err) => console.log(err.response))
    }
}