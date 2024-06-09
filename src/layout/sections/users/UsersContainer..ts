import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {changeFollowStatusAC, setUsersAC, UserType} from "../../../redux/users-reducer";
import UsersC from "./UsersC";

function mapStateToProps(state: RootStateType) {
    return {
        users: state.usersPage.users
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        changeFollowStatus: (userId: number, followStatus: boolean) => {
            dispatch(changeFollowStatusAC(userId, followStatus))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)