import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Sidebar} from "./layout/sidebar/Sidebar";
import {Profile} from "./layout/sections/proFile/Profile";
import {Route} from "react-router-dom";
import {News} from "./layout/sections/news/News";
import {Music} from "./layout/sections/music/Music";
import {Settings} from "./layout/sections/settings/Settings";
import {DialogsContainer} from "./layout/sections/dialogs/DialogsContainer";
import {UsersContainer} from "./layout/sections/users/UsersContainer.";

type AppPropsType = {

}

function App({}: AppPropsType) {
    return (
        <div className='App'>
            <Header/>
            <Sidebar />
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile />}/>
                <Route path='/dialogs/' render={() => <DialogsContainer />}/>
                <Route path='/users/' render={() => <UsersContainer />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
