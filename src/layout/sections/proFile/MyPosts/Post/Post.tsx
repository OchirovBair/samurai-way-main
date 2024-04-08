import React from 'react';
import postAvatar from '../../../../../assets/postAvatar.jpg'
import s from './Post.module.css'
import {PostType} from "../../../../../redux/state";

type PostPropsType = PostType

export const Post = ({likesCount, message, id}: PostPropsType) => {
    return (
        <div className={s.post_wrapper}>
            <img src={postAvatar} alt="post avatar"/>
            <div>
                <p>{message}</p>
                <span>likes {likesCount}</span>
            </div>
        </div>
    );
};

