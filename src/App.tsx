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
import {ActionsTypes, RootStateType} from "./redux/types";

type AppPropsType = {
    state: RootStateType
    dispatch:(action: ActionsTypes)=>void
}

function App({state, dispatch}: AppPropsType) {
    return (
        <div className='App'>
            <Header/>
            <Sidebar state={state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile state={state.profile} dispatch={dispatch}/>}/>
                <Route path='/dialogs/' render={() => <Dialogs state={state.dialogs} dispatch={dispatch}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
