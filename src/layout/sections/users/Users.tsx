import React from 'react';
import {UserType} from "../../../redux/users-reducer";
import s from './user.module.css'
import axios from "axios";
import userAvatar from '../../../assets/userAvatar.jpg'

export type UsersPropsType = {
    users: UserType[]
    changeFollowStatus: (userId: number, followStatus: boolean) => void
    setUsers: (users: UserType[]) => void
}

export type getUsersResponse = {
    items: UserRequestType[],
    totalCount: number
    error: null | string

}
export type UserRequestType = {
    name: string
    id: number
    photos: UserPhotoRequestType
    status: null | string
    followed: boolean
    uniqueUrlName: null | string
}

export type UserPhotoRequestType = {
    small: null | string
    large: null | string
}


export const Users = ({users, setUsers, changeFollowStatus}: UsersPropsType) => {
    const getUsersFromServer = async () => {
        if (users.length === 0) {
            const result = await axios
                .get<getUsersResponse>('https://social-network.samuraijs.com/api/1.0/users?count=2', {withCredentials: true})
            const usersFromServer = result.data.items
            const domainUsers: UserType[] = usersFromServer.map(u => {
                return (
                    {
                        followed: u.followed,
                        id: u.id,
                        avatarUrl: userAvatar,
                        location: {city: 'MSK', country: 'Russia'},
                        status: 'Hi everyone',
                        fullName: u.name
                    } as UserType)
            })
            console.log(domainUsers)
            setUsers(domainUsers)
        }
    }

    return (
        <div>
            {users.length === 0 && <button onClick={getUsersFromServer}>Get Users</button>}
            {users.map(user => {
                return (
                    <div>
                <span>
                    <div>
                        <img src={user.avatarUrl} alt="userAvatar" className={s.userAvatar}/>
                    </div>
                    <div>
                        <button
                            onClick={() => changeFollowStatus(user.id, !user.followed)}>{user.followed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
                    </div>
                )
            })}
        </div>
    )
};