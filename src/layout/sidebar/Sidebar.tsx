import React from 'react';
import {DataType, Menu, MenuPropsType} from "./Menu/Menu";
import {v1} from "uuid";
import s from './Sidebar.module.css'

const sideBarData:Array<DataType> = [
    {id: v1(), title:'profile'},
    {id: v1(), title:'dialogs'},
    {id: v1(), title:'news'},
    {id: v1(), title:'music'},
    {id: v1(), title:'settings'},
]

export const Sidebar = () => {
    return (
        <nav className={s.sidebar_wrapper}>
            <Menu data={sideBarData}/>
        </nav>
    );
};

