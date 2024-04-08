import React from 'react';
import s from './FriendsBar.module.css'
import {FriendType} from "../../../redux/state";

type FriendsBarPropsType = {
    friendsList: FriendType[]
}

export const FriendsBar = ({friendsList}: FriendsBarPropsType) => {
    const friends = friendsList.map(friend => {
        return (
            <div key={friend.id} className={s.friendBarItem}>
                <img className={s.friendBarImg} src={friend.avatar} alt={friend.avatar}/>
                <span>{friend.name}</span>
            </div>
        )
    })
    return (
        <div className={s.friendBar}>
            {friends}
        </div>
    );
};