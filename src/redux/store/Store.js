import { createStore, combineReducers } from 'redux';
import eventReducer from '../reducers/EventReducer.js';

const Store = createStore(
    combineReducers({
        events: eventReducer,
    })
)

export default Store;