import React from 'react';
import s from './Message.module.css';
import {MessageType} from "../../../../redux/dialogs-reducer";

type MessagePropsType = {
    message: MessageType
}

export const Message = ({message}: MessagePropsType) => {
    return (
        <div className={s.message}>
            {message.message}
        </div>
    );
};