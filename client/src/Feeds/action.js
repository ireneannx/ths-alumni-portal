import axios from "axios"

export function getFeedPosts() {

    return async function (dispatch) {
        const res = await axios.get('/posts')
        console.log('recieving from DB', res.data)
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
        await axios.post('/posts', text) //user id needs to be attached here 
            .then(() => {
                return dispatch({
                    type: "ADD",
                    payload: data
                })
            })
            .catch((err) => console.log(err))
    }
}