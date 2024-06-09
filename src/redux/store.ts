import {v1} from "uuid";
import avatarSasha from '../assets/dialog-avatars/avatarSasha.webp'
import avatarMisha from '../assets/dialog-avatars/avatarMisha.jpg'
import avatarOleg from '../assets/dialog-avatars/avatarOleg.jpg'
import avatarNasty from '../assets/dialog-avatars/avatarNasty.webp'
import {DialogsActionsTypes, dialogsReducer} from "./dialogs-reducer";
import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {SideBarActionsTypes, sidebarReducer} from "./sidebar-reducer";
import {RootStateType} from "./redux-store";

//-------------------------------- OOP Store -------------------

export type StoreType = {
    _state: any
    getState: () => RootStateType
    // addPost: ()=>void
    // changePostText: (newPostText: string)=>void
    _onChange: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: SideBarActionsTypes | ProfileActionsTypes | DialogsActionsTypes) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: v1(), message: 'How are you?', likesCount: 10},
                {id: v1(), message: 'Yo?', likesCount: 21},
                {id: v1(), message: 'Yo?', likesCount: 21},
                {id: v1(), message: 'Yo?', likesCount: 21},
                {id: v1(), message: 'Yo?', likesCount: 21},
            ],
        },
        dialogsPage: {
            dialogs: [
                {name: 'Sasha', id: v1(), avatar: avatarSasha},
                {name: 'Misha', id: v1(), avatar: avatarMisha},
                {name: 'Oleg', id: v1(), avatar: avatarOleg},
                {name: 'Nasty', id: v1(), avatar: avatarNasty},
            ],
            newMessage: '',
            messages: [
                {id: v1(), message: 'Hi ',},
                {id: v1(), message: 'Yo',},
                {id: v1(), message: 'How are you?',},
                {id: v1(), message: 'Good',},
            ],
        },
        sidebar: {
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
    },
    getState() {
        return this._state
    },
    _onChange() {
    }, // после рендера index.tsx rerenderTree становится функцией renderTree посредством функции subscribe
    subscribe(observer) {
        this._onChange = observer
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._onChange()
    },
}





