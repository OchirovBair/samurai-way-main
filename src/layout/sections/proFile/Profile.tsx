import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes, PostType, ProfilePageType} from "../../../redux/types";

type ProfilePropsType = {
    state: ProfilePageType
    dispatch:(action: ActionsTypes)=>void
}

export const Profile = ({state, dispatch}:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts} dispatch={dispatch} newPostText={state.newPostText} />
        </div>
    );
};

