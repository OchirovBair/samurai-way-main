import React from 'react';
import s from "../Dialogs.module.css";

type MessagesPropsType = {
    message: string
}

export const Messages = ({message}: MessagesPropsType) => {
    return (
        <div className={s.messages}>
            <div className={s.message}>Some</div>
        </div>
    );
};