import React from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../../redux/state";

type DialogItemPropsType = {
    dialog: DialogType
}

export const DialogItem = ({dialog}: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <img className={s.dialogImg} src={dialog.avatar} alt={dialog.avatar}/>
            <NavLink activeClassName={s.active} to={'/dialogs/' + dialog.id}>{dialog.name}</NavLink>
        </div>
    );
};