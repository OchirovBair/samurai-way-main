import React from 'react';
import s from './Menu.module.css'
import {NavLink} from "react-router-dom";

export type DataType = {
    title: string
    id: string
}
export type MenuPropsType = {
    data: Array<DataType>
}

export const Menu = ({ data }: MenuPropsType) => {
    return (
        <ul>
            {data.map((el) => {
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

