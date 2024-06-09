import {v1} from "uuid";

const initialProfileState: UsersPageType = {
    users: []
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

export type ChangeFollowStatusActionType = ReturnType<typeof changeFollowStatusAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>

export type UsersPageType = {
    users: UserType[]
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
export type UsersActionsTypes = ChangeFollowStatusActionType | SetUsersActionType