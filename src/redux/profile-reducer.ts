import {ActionsTypes, ProfilePageType} from "./types";
import {v1} from "uuid";
const initialProfileState = {
    newPostText: '',
        posts: [
        {id: v1(), message: 'How are you?', likesCount: 10},
        {id: v1(), message: 'Yo?', likesCount: 21},
        {id: v1(), message: 'Yo?', likesCount: 21},
        {id: v1(), message: 'Yo?', likesCount: 21},
        {id: v1(), message: 'Yo?', likesCount: 21},
    ],
}
export const profileReducer = (state:ProfilePageType = initialProfileState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {id: v1(), message: state.newPostText, likesCount: 0}
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "CHANGE-POST-TEXT":
            state.newPostText = action.payload.newPostText
            return state
        default:
            return state
    }
}

export const addPostAC = () => {
    return {type: 'ADD-POST'} as const
}

export const changePostTextAC = (newPostText:string) => {
    return {type: 'CHANGE-POST-TEXT', payload: {newPostText}} as const
}