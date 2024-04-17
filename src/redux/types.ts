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
}

export type SidebarType = {
    sidebarButtonsName: SidebarButtonType[]
    friendsList: FriendType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
