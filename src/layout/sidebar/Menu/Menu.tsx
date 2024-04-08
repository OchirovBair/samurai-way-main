import React from 'react';
import s from './Menu.module.css'
import {NavLink} from "react-router-dom";
import {SidebarButtonType} from "../../../redux/state";

export type MenuPropsType = {
    sidebarButtonsName: SidebarButtonType[]
}

export const Menu = ({sidebarButtonsName}: MenuPropsType) => {
    return (
        <ul>
            {sidebarButtonsName.map((el) => {
                const title = el.title.charAt(0).toUpperCase() + el.title.slice(1);
                return (
                    <li className={s.item} key={el.id}>
                        <NavLink to={`/${el.title}`} activeClassName={s.activeLink}>{title}</NavLink>
                    </li>
                );
            })}
        </ul>
    );
};

