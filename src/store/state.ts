import {combineReducers, createStore} from 'redux';

const rootReducers = combineReducers({
    set: setReducer,
});
export const state=createStore(rootReducers)
