import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AuthStoreProvider} from "./store/AuthStore";
import {authReducer, initialState} from "./store/AuthReducer";



ReactDOM.render(
    <React.StrictMode>
        <AuthStoreProvider initialState={initialState} reducer={authReducer}>
            <App/>
        </AuthStoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
