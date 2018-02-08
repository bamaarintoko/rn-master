import { createStore, applyMiddleware,compose } from 'redux'
import app from '../reducers'
import thunk from 'redux-thunk'
import {initialFilter} from '../reducers/authReducers'
import Preference from "../utils/Preference";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import { middleware } from '../utils/Redux'
export default function configureStore() {
    let store = createStore(
        app,applyMiddleware(thunk,middleware))
    // console.log("configureStore",store.getState())
    return store
}