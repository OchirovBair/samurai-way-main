import './index.css';
import {store} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";



const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)} changePostText={store.changePostText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}


renderTree()

store.subscribe(renderTree)
