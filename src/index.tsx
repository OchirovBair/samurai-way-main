import './index.css';
import {addPost, changePostText, RootStateType, state, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";



const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changePostText={changePostText}/>
        </BrowserRouter>, document.getElementById('root'));
}


renderTree(state)

subscribe(renderTree)
