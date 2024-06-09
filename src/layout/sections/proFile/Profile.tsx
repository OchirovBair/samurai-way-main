import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import { MyPostsContainer} from "./MyPosts/MyPostsContainet";
import {StoreType} from "../../../redux/redux-store";

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

