import jwt_decode from 'jwt-decode'
import axios from 'axios';

export const CHANGE_AUTH = 'CHANGE_AUTH'

export const changeAuth = (authData, history) => async dispatch => {

    if (authData.email !== '' && authData.password !== "") {
        await axios.post("/auth", authData)
            .then((res) => {

                const decode = jwt_decode(res.data.token)
                localStorage.setItem("thsToken", res.data.token);
                dispatch({
                    type: CHANGE_AUTH,
                    payload: decode
                })
                if (res.status === 200) {
                    history.push('/user/posts')
                }
            })
            .catch()
    }
}

export function changeAuthValue() {
    return {
        type: 'CHANGE_AUTH_STATE',
    }
}