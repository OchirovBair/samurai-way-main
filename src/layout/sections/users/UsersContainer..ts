import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {
    changeFollowStatusAC,
    setCountUsersAC,
    setCurrentPageAC,
    setUsersAC,
    UserType
} from "../../../redux/users-reducer";
import UsersC from "./UsersC";

function mapStateToProps(state: RootStateType) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        changeFollowStatus: (userId: number, followStatus: boolean) => {
            dispatch(changeFollowStatusAC(userId, followStatus))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCountUsers: (count: number)=> {
            dispatch(setCountUsersAC(count))
        },
        setCurrentPage: (currentPage: number)=>{
            dispatch(setCurrentPageAC(currentPage))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)