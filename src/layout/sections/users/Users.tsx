import React from 'react';
import {UserType} from "../../../redux/users-reducer";
import s from './user.module.css'
import axios from "axios";
import userAvatar from '../../../assets/userAvatar.jpg'

type UsersPropsType = {
    buttonsArray: number[]
    users: UserType[]
    currentPage: number
    changeFollowStatus: (userId: number, followStatus: boolean) => void
    onPageChanged: (pagenumber: number) => void
}


export const Users = ({buttonsArray, currentPage, onPageChanged, users, changeFollowStatus}: UsersPropsType) => {
    return (
        <div>
            {buttonsArray.map(el => <button
                className={`${s.paginationButton} ${currentPage === el ? s.activeButton : ''}`}
                onClick={() => onPageChanged(el)}>{el}</button>)}
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