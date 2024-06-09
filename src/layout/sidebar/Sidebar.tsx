import React from 'react';
import {Menu} from "./Menu/Menu";
import s from './Sidebar.module.css'
import {FriendsBar} from './FriendsBar/FriendsBar';
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";

type SidebarPropsType = {
}

export const Sidebar = ({}:SidebarPropsType) => {
    return (
        <nav className={s.sidebar_wrapper}>
            <MenuContainer/>
            <FriendsBarContainer/>
        </nav>
    );
};

function mapStateToMenuProps(state: RootStateType) {
    return {
        sidebarButtonsName: state.sidebarPage.sidebarButtonsName,
    }
}

function mapStateToFriendsBarProps(state: RootStateType) {
    return {
        friendsList: state.sidebarPage.friendsList,
    }
}

export const MenuContainer = connect(mapStateToMenuProps)(Menu)
export const FriendsBarContainer = connect(mapStateToFriendsBarProps)(FriendsBar)
