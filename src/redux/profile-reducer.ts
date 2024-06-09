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
export const profileReducer = (state:UsersPageType = initialProfileState, action: ProfileActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {id: v1(), message: state.newPostText, likesCount: 0}
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case "CHANGE-POST-TEXT":
            return {...state, newPostText: action.payload.newPostText}
        default:
            return state
    }
}

export const addPostAC = () => {
    return {type: 'ADD-POST'} as const
}

export const changePostTextAC = (newPostText:string) => {
    debugger
    return {type: 'CHANGE-POST-TEXT', payload: {newPostText}} as const
}


export type AddPostActionType = ReturnType<typeof addPostAC>

export type ChangePostTextActionType = ReturnType<typeof changePostTextAC>


export type ProfileActionsTypes = AddPostActionType | ChangePostTextActionType


export type UsersPageType = {
    posts: PostType[]
    newPostText: string
}


export type PostType = {
    id: string
    message: string
    likesCount: number
}