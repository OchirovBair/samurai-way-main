import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {Route} from "react-router-dom";

const dialogItems = [
    {
        name: 'Sashe',
        id: 1,
        message: 'Hi Im Sashe',
    },
    {
        name: 'Misha',
        id: 2,
        message: 'Hi Im Misha',
    },
    {
        name: 'Oleg',
        id: 3,
        message: 'Hi Im Misha',
    },
    {
        name: 'Nasty',
        id: 4,
        message: 'Hi Im Nasty',
    },
]

type DialogsPropsType = {}

export const Dialogs = ({}: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItems.map(item =>
                    <DialogItem name={item.name} id={item.id}/>
                )}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink activeClassName={s.active} to='/dialogs/1'>User 1</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink activeClassName={s.active} to='/dialogs/2'>User 2</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink activeClassName={s.active} to='/dialogs/3'>User 3</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink activeClassName={s.active} to='/dialogs/4'>User 4</NavLink>*/}
                {/*</div>*/}
            </div>
            <div>
                {/*{dialogItems.map(item =>*/}
                {/*    <Route path={'/dialogs/' + item.id} component={Messages}/>*/}
                {/*)}*/}
                <Messages message={dialogItems[0].message}/>
            </div>
        </div>
    );
};