import React from 'react';
import s from './Message.module.css';

type MessagesPropsType = {
    message: string
}

export const Message = ({message}: MessagesPropsType) => {
    return (
        <div className={s.messages}>
            {message}
        </div>
    );
};