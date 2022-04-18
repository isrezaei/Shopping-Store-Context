import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApiContext from "./Context/ApiContext";


ReactDOM.render(
    <React.StrictMode>
        <ApiContext>
            <App />
        </ApiContext>
    </React.StrictMode>,
    document.getElementById('root')
);