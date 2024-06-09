const initialProfileState: UsersPageType = {
    users: [],
    totalUsersCount: 30,
    pageSize: 3,
    currentPage: 1
}
export const usersReducer = (state = initialProfileState, action: UsersActionsTypes) => {
    switch (action.type) {
        case "CHANGE-FOLLOW-STATUS":
            return {
                ...state, users: state.users
                    .map(user => user.id === action.payload.userId
                        ? {...user, followed: action.payload.followStatus}
                        : user)
            }
        case "SET-USERS":
            return {...state, users: action.payload.users}
        case "SET-USERS-COUNT":
            return {...state, totalUsersCount: action.payload.count}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.currentPage}
        default:
            return state
    }
}

export const changeFollowStatusAC = (userId: number, followStatus: boolean) => {
    return {type: 'CHANGE-FOLLOW-STATUS', payload: {userId, followStatus}} as const
}

export const setUsersAC = (users: UserType[]) => {
    return {type: 'SET-USERS', payload: {users}} as const
}

export const setCountUsersAC = (count: number) => {
    return {type: 'SET-USERS-COUNT', payload: {count}} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', payload: {currentPage}} as const
}

export type ChangeFollowStatusActionType = ReturnType<typeof changeFollowStatusAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>
export type SetCountUsersActionType = ReturnType<typeof setCountUsersAC>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>

export type UsersPageType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
}
export type UserType = {
    id: number
    avatarUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string,
        country: string
    }
}
export type UsersActionsTypes = ChangeFollowStatusActionType | SetUsersActionType | SetCountUsersActionType | SetCurrentPageActionType

export type getUsersResponse = {
    items: UserResponseType[],
    totalCount: number
    error: null | string

}
export type UserResponseType = {
    name: string
    id: number
    photos: UserPhotoResponseType
    status: null | string
    followed: boolean
    uniqueUrlName: null | string
}

export type UserPhotoResponseType = {
    small: null | string
    large: null | string
}
