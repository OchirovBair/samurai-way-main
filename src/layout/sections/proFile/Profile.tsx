import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataType} from "../../../index";

type ProfilePropsType = {
    postsData: PostDataType[]
}

export const Profile = ({postsData}:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    );
};

