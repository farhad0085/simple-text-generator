import {createStore, applyMiddleware} from 'redux'
import textReducer from "./reducers/textReducer";
import thunk from 'redux-thunk'


const store = createStore(
    textReducer,
    applyMiddleware(thunk)
)

export default store