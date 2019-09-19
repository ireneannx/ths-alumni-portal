export function changeAuth(data, history) {

    return {
        type: 'CHANGE_AUTH',
        payload: data
    }

}

export function changeAuthValue() {
    return {
        type: 'CHANGE_AUTH_STATE',
    }
}