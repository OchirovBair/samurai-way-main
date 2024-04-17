import {v1} from "uuid";
import avatarSasha from '../assets/dialog-avatars/avatarSasha.webp'
import avatarMisha from '../assets/dialog-avatars/avatarMisha.jpg'
import avatarOleg from '../assets/dialog-avatars/avatarOleg.jpg'
import avatarNasty from '../assets/dialog-avatars/avatarNasty.webp'
import {RootStateType} from "./types";

//-------------------------------- OOP Store -------------------

export type StoreType = {
    _state: RootStateType
    getState: ()=>RootStateType
    addPost: ()=>void
    changePostText: (newPostText: string)=>void
    _onChange: ()=>void
    subscribe: (observer:()=>void)=>void
}

export const store:StoreType = {
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
    addPost() {
        const newPost = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._onChange()
    },
    changePostText(newPostText) {
        this._state.profilePage.newPostText = newPostText
        this._onChange()
    },
    _onChange(){}, // после рендера index.tsx rerenderTree становится функцией renderTree посредством функции subscribe
    subscribe(observer) {
        this._onChange = observer
    },
}
