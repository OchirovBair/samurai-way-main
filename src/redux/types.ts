import {addPostAC, changePostTextAC} from "./profile-reducer";
import {addMessageAC, changeMassageTextAC} from "./dialogs-reducer";
import {rootReducer} from "./redux-store";

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

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessage: string
}

export type SidebarType = {
    sidebarButtonsName: SidebarButtonType[]
    friendsList: FriendType[]
}

export type RootStateType = ReturnType<typeof rootReducer>



export type AddPostActionType = ReturnType<typeof addPostAC>

export type ChangePostTextActionType = ReturnType<typeof changePostTextAC>

export type AddMessageActionType = ReturnType<typeof addMessageAC>

export type ChangeMessageTextActionType = ReturnType<typeof changeMassageTextAC>

export type ActionsTypes = AddPostActionType | ChangePostTextActionType | AddMessageActionType | ChangeMessageTextActionType
