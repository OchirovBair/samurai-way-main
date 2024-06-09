import React from 'react';
import {Menu} from "./Menu/Menu";
import s from './Sidebar.module.css'
import {RootStateType, SidebarType} from "../../redux/types";
import {FriendsBar} from './FriendsBar/FriendsBar';
import {StoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addMessageAC, changeMassageTextAC} from "../../redux/dialogs-reducer";

type SidebarPropsType = {
}

export const Sidebar = ({}:SidebarPropsType) => {
    return (
        <nav className={s.sidebar_wrapper}>
            <MenuContainer/>
            <FriendsBarContainer/>
            {/*<Menu sidebarButtonsName={store.getState().sidebar.sidebarButtonsName}/>*/}
            {/*<FriendsBar friendsList={store.getState().sidebar.friendsList}/>*/}
        </nav>
    );
};

function mapStateToMenuProps(state: RootStateType) {
    return {
        sidebarButtonsName: state.sidebar.sidebarButtonsName,
    }
}

function mapStateToFriendsBarProps(state: RootStateType) {
    return {
        friendsList: state.sidebar.friendsList,
    }
}

export const MenuContainer = connect(mapStateToMenuProps)(Menu)
export const FriendsBarContainer = connect(mapStateToFriendsBarProps)(FriendsBar)
