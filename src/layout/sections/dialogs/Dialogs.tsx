import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {DialogsPageType, DialogType, MessageType} from "../../../redux/state";


type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs = ({state}: DialogsPropsType) => {
    const dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} dialog={dialog}/>)
    const messagesElements = state.messages.map(message => <Message key={message.id} message={message}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addNewMassege = () => {
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <textarea className={s.textareaDialogs} ref={newMessageElement}></textarea>
                <button onClick={addNewMassege}>Send</button>
            </div>
        </div>
    );
};