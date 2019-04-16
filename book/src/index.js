import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import decode from "jwt-decode";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import './index.css';
import { userLoggedIn } from './Actions/auth';

import rootReducer from "./rootReducer";

import App from './App';
import * as serviceWorker from './serviceWorker';
// import { userInfo } from 'os';
// import { userLoggedIn } from './Actions/auth';


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.bookwormJWT){
    const payload = decode(localStorage.bookwormJWT);  //this is to prevent frequent verrify account after verification link has been confirmed
    const user = {token: localStorage.bookwormJWT,     // to dispatch user loggedin actions(TOKEN) and the token is localstorage.bookwormJWT
         email:payload.email,
         confirmed:payload.confirmed     // we decode json webtoken for user after verification of account
    };   
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <div>
    <Route component={App} />   {/*this way we have route that will render App component and pass history location to it*/}
    </div>
    </Provider>
    
    </BrowserRouter>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

