import {
    changeFollowStatusAC,
    setCountUsersAC,
    setCurrentPageAC, setIsFetchingAC,
    setUsersAC,
    UserType
} from "../../../redux/users-reducer";
import {RootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import UsersAPIComponent from "./UsersC";


function mapStateToProps(state: RootStateType) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setIsFetching: (fetchStatus: boolean)=> {
            dispatch(setIsFetchingAC(fetchStatus))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)