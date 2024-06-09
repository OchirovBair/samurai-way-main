import {ActionsTypes, SidebarType} from "./types";
import {v1} from "uuid";
import avatarSasha from "../assets/dialog-avatars/avatarSasha.webp";
import avatarMisha from "../assets/dialog-avatars/avatarMisha.jpg";
import avatarNasty from "../assets/dialog-avatars/avatarNasty.webp";

const initialSidebarState = {
    sidebarButtonsName: [
        {id: v1(), title: 'profile'},
        {id: v1(), title: 'dialogs'},
        {id: v1(), title: 'news'},
        {id: v1(), title: 'music'},
        {id: v1(), title: 'settings'},
    ],
    friendsList: [
        {id: v1(), name: 'Sasha', avatar: avatarSasha},
        {id: v1(), name: 'Misha', avatar: avatarMisha},
        {id: v1(), name: 'Nasty', avatar: avatarNasty},
    ]
}

export const sidebarReducer = (state:SidebarType = initialSidebarState, action: ActionsTypes) => {
    switch (action.type) {
        default:
            return state
    }
}
