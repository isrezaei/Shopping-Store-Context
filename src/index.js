import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApiContext from "./Context/ApiContext";
import {StateContext} from "./Context/StateContext";


ReactDOM.render(
    <React.StrictMode>
        <ApiContext>
            <StateContext>
                <App />
            </StateContext>
        </ApiContext>
    </React.StrictMode>,
    document.getElementById('root')
);