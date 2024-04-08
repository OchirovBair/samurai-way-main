import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType} from "../../../redux/state";

type ProfilePropsType = {
    state: {
        posts:PostType[]
    }
}

export const Profile = ({state}:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts}/>
        </div>
    );
};

