import React from 'react';
import {Menu} from "./Menu/Menu";
import s from './Sidebar.module.css'
import {SidebarType} from "../../redux/types";
import {FriendsBar} from './FriendsBar/FriendsBar';

type SidebarPropsType = {
    state: SidebarType
}

export const Sidebar = ({state}:SidebarPropsType) => {
    return (
        <nav className={s.sidebar_wrapper}>
            <Menu sidebarButtonsName={state.sidebarButtonsName}/>
            <FriendsBar friendsList={state.friendsList}/>
        </nav>
    );
};

