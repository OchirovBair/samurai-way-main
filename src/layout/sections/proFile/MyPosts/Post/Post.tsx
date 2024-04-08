import React from 'react';
import postAvatar from '../../../../../assets/postAvatar.jpg'
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likes: number
}

export const Post = ({likes, message}: PostPropsType) => {
    return (
        <div className={s.post_wrapper}>
            <img src={postAvatar} alt="post avatar"/>
            <div>
                <p>{message}</p>
                <span>likes {likes}</span>
            </div>
        </div>
    );
};

