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

export function addFeedPost(data, id, name, avatarURL) {
    console.log('recieved by action', data)
    let text = {
        content: data,
        author: id,
        name: name,
        avatarURL: avatarURL
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
                    payload: text
                })
            })
            .catch((err) => console.log(err.response))
    }
}