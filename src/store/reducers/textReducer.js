import * as Types from '../actions/actionTypes'

const initialState = {
    para: 4,
    html: false,
    text: ''
}

function textReducer(state = initialState, action) {
    switch (action.type) {
        case Types.LOAD_TEXT: {
            return {
                ...state,
                text: action.payload
            }
        }
        default: return state
    }
}

export default textReducer