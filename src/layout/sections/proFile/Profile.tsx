import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType, ProfilePageType} from "../../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    addPost: () => void
    changePostText: (newPostText:string)=>void
}

export const Profile = ({state, addPost, changePostText}:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts} addPost={addPost} newPostText={state.newPostText} changePostText={changePostText}/>
        </div>
    );
};

