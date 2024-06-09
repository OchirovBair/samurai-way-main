import {addPostAC, changePostTextAC} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

function mapStateToProps(state: RootStateType) {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        changePostText: (text: string) => {
            dispatch(changePostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

