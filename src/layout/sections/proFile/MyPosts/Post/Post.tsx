import React from 'react';
import postAvatar from '../../../../../assets/postAvatar.jpg'
import s from './Post.module.css'

export const Post = () => {
    return (
        <div className={s.post_wrapper}>
            <img src={postAvatar} alt="post avatar"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, asperiores.</p>
        </div>
    );
};

