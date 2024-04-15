import { combineReducers, createStore } from 'redux';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;