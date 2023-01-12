import React from 'react';
import {Count} from './component/Count';
import {Set} from './component/Set';
import './App.css'
import {setStateType} from './store/setReduser';
import {useSelector} from 'react-redux';
import {AppStateType} from './Bll/store';
// import {AppRootState} from './store/state';

export const App = () => {
    let set = useSelector<AppStateType, setStateType>(state => state.set)
    return (
        <div className="App1">
            <div className="App">
                <Set set={set}/>
            </div>
            <div className="App">
                <Count set={set}/>
            </div>
        </div>
    );
}
