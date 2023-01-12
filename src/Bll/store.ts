import {combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {setReducer} from '../store/setReduser';
const rootReducer=combineReducers({
    counter:counterReducer,
    set:setReducer
})

export type AppStateType=ReturnType<typeof rootReducer>
export const store=legacy_createStore(rootReducer)

export type AppStoreType=typeof store
