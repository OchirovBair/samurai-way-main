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
import {DialogType, MessageType, PostDataType} from "./index";

type AppPropsType = {
    postsData: PostDataType[]
    messagesData: MessageType[]
    dialogsData: DialogType[]
}

function App({postsData, messagesData, dialogsData}:AppPropsType) {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={()=> <Profile postsData={postsData}/>}/>
                    <Route path='/dialogs/' render={()=> <Dialogs dialogsData={dialogsData} messagesData={messagesData}/> }/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
