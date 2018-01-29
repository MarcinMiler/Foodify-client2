
const initialState = {
    token: '',
    filter: ''
}

const auth = (state = initialState, action) => {
    switch(action.type) {

        case 'SET_TOKEN':
            return { ...state, token: action.token }

        case 'CHANGE_SEARCH_FILTER':
            return { ...state, filter: action.text }
        
        default:
            return state
    }
}

export default auth