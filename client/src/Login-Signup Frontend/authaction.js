import axios from 'axios';

export function changeAuth(data) {
    return {
        type: 'CHANGE_AUTH',
        payload: data
    }
}

