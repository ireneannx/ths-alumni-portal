import jwt_decode from 'jwt-decode'
import axios from 'axios';

export const CHANGE_AUTH = 'CHANGE_AUTH'

// export function changeAuth(data) {

//     return {
//         type: 'CHANGE_AUTH',
//         payload: data
//     }
//     // history.push('/user/posts')

// }

// export function changeAuth(data) {

//     return async function (dispatch) {
//         return dispatch({
//             type: "CHANGE_AUTH",
//             payload: data
//         })

//     }

// }

export const changeAuth = (authData, history) => async dispatch => {
    console.log('authaction', history)
    if (authData.email != '' && authData.password != "") {
        await axios.post("/auth", authData)
            .then((res) => {
                console.log('userData', res.data)
                const decode = jwt_decode(res.data.token)
                localStorage.setItem("thsToken", res.data.token);
                dispatch({
                    type: CHANGE_AUTH,
                    payload: decode
                })
                if (res.status == 200) {
                    history.push('/user/posts')
                }
            })
            .catch((err) => console.log(err.response))
    }
}

export function changeAuthValue() {
    return {
        type: 'CHANGE_AUTH_STATE',
    }
}