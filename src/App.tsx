import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Sidebar} from "./layout/sidebar/Sidebar";
import {Profile} from "./layout/sections/proFile/Profile";
import {Dialogs} from "./layout/sections/dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";
import {News} from "./layout/sections/news/News";
import {Music} from "./layout/sections/music/Music";
import {Settings} from "./layout/sections/settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs/' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
