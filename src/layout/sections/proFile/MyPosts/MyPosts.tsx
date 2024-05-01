import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, PostType} from "../../../../redux/types";
import {addPostAC, changePostTextAC} from "../../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: PostType[]
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export const MyPosts = ({posts, dispatch, newPostText}: MyPostsPropsType) => {
    const postsElements = posts.map(post => <Post key={post.id} message={post.message} id={post.id}
                                                  likesCount={post.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPostHandler = () => {
        dispatch(addPostAC())
    }

    const textareaChangeHandler = () => {
        if (newPostElement.current) {
            dispatch(changePostTextAC(newPostElement.current.value))
            // changePostText(newPostElement.current.value)
        }
    }
    return (
        <div>
            <div className={s.post_input_wrapper}>
                <span>My Post</span>
                <div>
                    <textarea placeholder={'Your news...'}
                              onChange={textareaChangeHandler}
                              ref={newPostElement}
                              value={newPostText}/>

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

