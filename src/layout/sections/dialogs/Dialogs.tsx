import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {ActionsTypes, DialogsPageType} from "../../../redux/types";
import {addMessageAC, changeMassageTextAC} from "../../../redux/dialogs-reducer";


type DialogsPropsType = {
    state: DialogsPageType
    dispatch:(action: ActionsTypes)=>void
}

export const Dialogs = ({state, dispatch}: DialogsPropsType) => {
    const dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} dialog={dialog}/>)
    const messagesElements = state.messages.map(message => <Message key={message.id} message={message}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onChangeMessage = () => {
        if (newMessageElement.current) {
            dispatch(changeMassageTextAC(newMessageElement.current.value))
        }
    }

    const addMessage = () => {
        dispatch(addMessageAC())
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
                          value={state.newMessage}
                          ref={newMessageElement}
                          onChange={onChangeMessage}
                          placeholder={'Your message...'}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    );
};