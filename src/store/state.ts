import {combineReducers, createStore} from 'redux';
import {setReducer} from './setReduser';

const rootReducers = combineReducers({
    set: setReducer,
});
export type AppRootState=ReturnType<typeof rootReducers>
export const store=createStore(rootReducers)
//@ts-ignore
window.state=store