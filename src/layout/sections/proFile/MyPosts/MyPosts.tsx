import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
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
               <Post/>
               <Post/>
               <Post/>
               <Post/>
            </div>
        </div>
    );
};

