import * as Types from '../actions/actionTypes'

const initialState = {
    para: 4,
    html: false,
    text: '',
    loading: true
}

function textReducer(state = initialState, action) {
    switch (action.type) {
        case Types.LOAD_TEXT: {
            return {
                ...state,
                text: action.payload
            }
        }
        case Types.TEXT_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case Types.TEXT_LOAD_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default: return state
    }
}

export default textReducer