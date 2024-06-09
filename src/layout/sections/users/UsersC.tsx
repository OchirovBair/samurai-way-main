import React from "react";
import s from "./user.module.css";
import axios from "axios";
import {getUsersResponse, setCountUsersAC, setCurrentPageAC, UserType} from "../../../redux/users-reducer";
import userAvatar from "../../../assets/userAvatar.jpg";


export type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    changeFollowStatus: (userId: number, followStatus: boolean) => void
    setUsers: (users: UserType[]) => void
    setCountUsers: (count: number) => void
    setCurrentPage: (currentPage: number) => void
}

class UsersC extends React.Component<UsersPropsType> {
    componentDidMount() {
        const getUsersFromServer = (currentPage: number, pageSize: number) => {
            axios.get<getUsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`, {withCredentials: true})
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
        getUsersFromServer(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<getUsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`, {withCredentials: true})
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
                // this.props.setCountUsers(40)
            })
    }

    render() {
        const buttonsArray = []
        for (let i = 1; i <= Math.ceil(this.props.totalUsersCount / this.props.pageSize); i++) {
            buttonsArray.push(i)
        }
        return (
            <div>
                {buttonsArray.map(el => <button
                    className={`${s.paginationButton} ${this.props.currentPage === el ? s.activeButton : ''}`}
                    onClick={() => this.onPageChanged(el)}>{el}</button>)}
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