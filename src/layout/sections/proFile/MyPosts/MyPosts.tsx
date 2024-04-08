import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
}

export const MyPosts = ({posts}:MyPostsPropsType) => {
    const postsElements = posts.map(post=> <Post key={post.id} message={post.message} id={post.id} likesCount={post.likesCount}/>)
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

