import {v1} from "uuid";
import avatarSasha from '../assets/dialog-avatars/avatarSasha.webp'
import avatarMisha from '../assets/dialog-avatars/avatarMisha.jpg'
import avatarOleg from '../assets/dialog-avatars/avatarOleg.jpg'
import avatarNasty from '../assets/dialog-avatars/avatarNasty.webp'

export type DialogType = {
    name: string
    id: string
    avatar: string
}


export type MessageType = {
    id: string
    message: string
}


export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type FriendType = {
    id: string
    name: string
    avatar: string
}

export type SidebarButtonType = {
    id: string
    title: string
}

export type StateType = {
    profilePage: {
        posts: PostType[]
    }
    dialogsPage: {
        dialogs: DialogType[]
        messages: MessageType[]
    }
    sidebar: {
        sidebarButtonsName:SidebarButtonType[]
        friendsList: FriendType[]
    }
}

export const state: StateType = {
    profilePage: {
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
            {id: v1(), title:'profile'},
            {id: v1(), title:'dialogs'},
            {id: v1(), title:'news'},
            {id: v1(), title:'music'},
            {id: v1(), title:'settings'},
        ],
        friendsList: [
            {id: v1(), name: 'Sasha', avatar: avatarSasha},
            {id: v1(), name: 'Misha', avatar: avatarMisha},
            {id: v1(), name: 'Nasty', avatar: avatarNasty},
        ]
    }
}