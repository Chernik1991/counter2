import React from 'react';
import {Count} from './Count';
import {Set} from './Set';
import './App.css'

export const App = () => {
    return (
        <div className="App">
            <tr>
                <th><Set/></th>
                <th><Count/></th>
            </tr>
        </div>
    );
}
