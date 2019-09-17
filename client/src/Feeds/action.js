import axios from "axios"

export function getFeedPosts() {

    return async function (dispatch) {
        axios.defaults.headers.common['Authorization'] =  localStorage.getItem('thsToken')
        const res = await axios.get('http://localhost:4000/posts')
        return dispatch({
            type: "GET",
            payload: res.data
        })
    }
}

export function addFeedPost(data) {
    console.log('recieved by action', data)

    let text = {
        content: data
    }

    return async function (dispatch) {
        await axios.post('http://localhost:4000/posts', text, {
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