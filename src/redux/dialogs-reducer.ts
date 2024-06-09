import {v1} from "uuid";
import avatarSasha from "../assets/dialog-avatars/avatarSasha.webp";
import avatarMisha from "../assets/dialog-avatars/avatarMisha.jpg";
import avatarOleg from "../assets/dialog-avatars/avatarOleg.jpg";
import avatarNasty from "../assets/dialog-avatars/avatarNasty.webp";

const initialDialogsState = {
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
}
export const dialogsReducer = (state: DialogsPageType = initialDialogsState, action: DialogsActionsTypes) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {id: v1(), message: state.newMessage}
            return {...state, messages: [...state.messages, newMessage],  newMessage: ''}
        case "CHANGE-MESSAGE-TEXT":
            return {...state, newMessage: action.payload.newText}
        default:
            return state
    }
}

export const addMessageAC = () => {
    return {type: 'ADD-MESSAGE'} as const
}

export const changeMassageTextAC = (newText: string) => {
    return {type: 'CHANGE-MESSAGE-TEXT', payload: {newText}} as const
}

export type AddMessageActionType = ReturnType<typeof addMessageAC>

export type ChangeMessageTextActionType = ReturnType<typeof changeMassageTextAC>

export type DialogsActionsTypes = AddMessageActionType | ChangeMessageTextActionType


export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessage: string
}
export type DialogType = {
    name: string
    id: string
    avatar: string
}

export type MessageType = {
    id: string
    message: string
}
