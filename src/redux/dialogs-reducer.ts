import {ActionsTypes, DialogsPageType, MessageType, ProfilePageType} from "./types";
import {v1} from "uuid";

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {id: v1(), message: state.newMessage}
            state.messages.push(newMessage)
            state.newMessage = ''
            return state
        case "CHANGE-MESSAGE-TEXT":
            state.newMessage = action.payload.newText
            return state
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