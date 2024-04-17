import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Sidebar} from "./layout/sidebar/Sidebar";
import {Profile} from "./layout/sections/proFile/Profile";
import {Dialogs} from "./layout/sections/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./layout/sections/news/News";
import {Music} from "./layout/sections/music/Music";
import {Settings} from "./layout/sections/settings/Settings";
import {changePostText, RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    addPost: ()=>void
    changePostText: (newPostText:string)=>void
}

function App({state, addPost, changePostText}: AppPropsType) {
    return (
        <div className='App'>
            <Header/>
            <Sidebar state={state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile state={state.profilePage} addPost={addPost} changePostText={changePostText}/>}/>
                <Route path='/dialogs/' render={() => <Dialogs state={state.dialogsPage}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
