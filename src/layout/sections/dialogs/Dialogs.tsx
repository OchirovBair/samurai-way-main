import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {DialogType, MessageType} from "../../../redux/state";


type DialogsPropsType = {
    state: {
        messages: MessageType[]
        dialogs: DialogType[]
    }
}

export const Dialogs = ({state}: DialogsPropsType) => {
    const dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} dialog={dialog}/>)

    const messagesElements = state.messages.map(message => <Message key={message.id} message={message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};