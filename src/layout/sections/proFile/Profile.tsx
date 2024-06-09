import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainet";

type ProfilePropsType = {
}

export const Profile = ({}:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
};

