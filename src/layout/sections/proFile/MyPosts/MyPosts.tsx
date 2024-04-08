import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostDataType} from "../../../../index";

type MyPostsPropsType = {
    postsData: PostDataType[]
}

export const MyPosts = ({postsData}:MyPostsPropsType) => {
    const postsElements = postsData.map(post=> <Post message={post.message} likes={post.likesCount}/>)
    return (
        <div>
            <div className={s.post_input_wrapper}>
                <span>My Post</span>
                <div>
                    <input type="text" placeholder={'Your news...'}/>
                    <button>Send</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};

