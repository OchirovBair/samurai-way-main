import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, PostType, RootStateType} from "../../../../redux/types";
import {addPostAC, changePostTextAC} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MyPostsPropsType = {
    store: StoreType
}

// export const MyPostsContainer = ({store}: MyPostsPropsType) => {
//
//     const addPostHandler = () => {
//         store.dispatch(addPostAC())
//     }
//
//     const textareaChangeHandler = (text: string) => {
//         store.dispatch(changePostTextAC(text))
//     }
//     return (
//         <MyPosts
//             newPostText={store.getState().profile.newPostText}
//             posts={store.getState().profile.posts}
//             changePostText={textareaChangeHandler}
//             addPost={addPostHandler}/>
//     );
// };

function mapStateToProps(state: RootStateType) {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
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

