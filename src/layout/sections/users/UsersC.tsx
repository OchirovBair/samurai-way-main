import React from "react";
import s from "./user.module.css";
import axios from "axios";
import {UserType} from "../../../redux/users-reducer";
import userAvatar from "../../../assets/userAvatar.jpg";
import {getUsersResponse, UsersPropsType} from "./Users";

class UsersC extends React.Component<UsersPropsType> {
    componentDidMount() {
        const getUsersFromServer = () => {
            const result = axios
                .get<getUsersResponse>('https://social-network.samuraijs.com/api/1.0/users?count=2', {withCredentials: true})
                .then(res => {
                    const usersFromServer = res.data.items
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
                    this.props.setUsers(domainUsers)
                })
        }
        getUsersFromServer()
    }

    render() {
        return (
            <div>
                {this.props.users.map(user => {
                    return (
                        <div>
                <span>
                    <div>
                        <img src={user.avatarUrl} alt="userAvatar" className={s.userAvatar}/>
                    </div>
                    <div>
                        <button
                            onClick={() => this.props.changeFollowStatus(user.id, !user.followed)}>{user.followed ? 'Unfollow' : 'Follow'}</button>
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
    }
}

export default UsersC