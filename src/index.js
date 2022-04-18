import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import StateContext from "./Context/StateContext";
import ApiContext from "./Context/ApiContext";

ReactDOM.render(
    <BrowserRouter>
        <StateContext>
            <ApiContext>
                <App />
            </ApiContext>
        </StateContext>
    </BrowserRouter>,

    document.getElementById('root')
);