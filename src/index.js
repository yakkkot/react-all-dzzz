import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {unstable_HistoryRouter as BrowserRouter} from "react-router-dom";
import {history} from "./Services/axiox.services";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter history={history}>
        <App/>
    </BrowserRouter>
);

