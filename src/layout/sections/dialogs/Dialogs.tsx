import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {DialogType, MessageType} from "../../../index";


type DialogsPropsType = {
    messagesData: MessageType[]
    dialogsData: DialogType[]
}

export const Dialogs = ({dialogsData, messagesData}: DialogsPropsType) => {
    const dialogsElements = dialogsData.map(item => <DialogItem key={item.id} name={item.name} id={item.id}/>)

    const messagesElements = messagesData.map(message => <Message message={message.message} key={message.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
            </div>
        </div>
    );
};