const initialState = {
    feeds: [],
}

// console.log('from feedReducer', initialState)

const Feed = (state = initialState, action) => {
    switch (action.type) {
        case 'GET':
            return { ...state, feeds: action.payload }
        case 'ADD':
            return { ...state, feeds: [action.payload, ...state.feeds]}
        default:
            return { ...state }
    }
}

export default Feed