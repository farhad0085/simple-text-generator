import axios from 'axios'
import * as Types from './actionTypes';

export const getSampleText = (para, html) => dispatch => {
    if (para && para < 151) {
        dispatch({ type: Types.TEXT_LOADING, payload: true })
        axios.get(`http://localhost:5000/api?para=${para}&html=${html}`)
            .then(res => {
                dispatch({ type: Types.TEXT_LOADING, payload: false })
                return dispatch({ type: Types.LOAD_TEXT, payload: res.data.text })
            })
    }
}