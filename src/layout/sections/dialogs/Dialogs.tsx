import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {DialogType, MessageType} from "../../../redux/dialogs-reducer";


type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessage: string
    changeMessage: (text:string) => void
    addMessage: () => void
}

export const Dialogs = ({dialogs, messages, newMessage, changeMessage, addMessage}: DialogsPropsType) => {
    const dialogsElements = dialogs.map(dialog => <DialogItem key={dialog.id} dialog={dialog}/>)
    const messagesElements = messages.map(message => <Message key={message.id} message={message}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onChangeMessage = () => {
        if (newMessageElement.current) {
            changeMessage(newMessageElement.current.value)
        }
    }

    const onAddMessage = () => {
        addMessage()
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
                <textarea className={s.textareaDialogs}
                          value={newMessage}
                          ref={newMessageElement}
                          onChange={onChangeMessage}
                          placeholder={'Your message...'}></textarea>
                <button onClick={onAddMessage}>Send</button>
            </div>
        </div>
    );
};