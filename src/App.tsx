import React from 'react';
import {Count} from './Count';
import {Set} from './Set';
import './App.css'

export const App = () => {
    let maxValue=5;
    return (
        <div className="App1">
            <div className="App"><Set/></div>
            <div className="App"><Count maxValue={maxValue}/></div>
        </div>
    );
}
