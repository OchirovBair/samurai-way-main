import React from "react";
import axios from "axios";
import {getUsersResponse, UserType} from "../../../redux/users-reducer";
import userAvatar from "../../../assets/userAvatar.jpg";
import {Users} from "./Users";


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

class UsersAPIComponent extends React.Component<UsersPropsType> {
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
        return <Users
            buttonsArray={buttonsArray}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            changeFollowStatus={this.props.changeFollowStatus}
            currentPage={this.props.currentPage}/>
    }
}

export default UsersAPIComponent