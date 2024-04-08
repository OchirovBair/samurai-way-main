import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../../redux/state";

type MyPostsPropsType = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}

export const MyPosts = ({posts, addPost}: MyPostsPropsType) => {
    const postsElements = posts.map(post => <Post key={post.id} message={post.message} id={post.id}
                                                  likesCount={post.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPostHandler = () => {
        if (newPostElement.current) {
            addPost(newPostElement.current.value)
        }
    }
    return (
        <div>
            <div className={s.post_input_wrapper}>
                <span>My Post</span>
                <div>
                    <textarea placeholder={'Your news...'} ref={newPostElement}></textarea>
                    {newPostElement.current?.value || <div>Ведите текст</div>}
                    <button onClick={addPostHandler}>Send</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};

