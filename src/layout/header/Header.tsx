import React from 'react';
import {Icon} from "../../components/Icon";
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header_wrapper}>
            <Icon width={'77.7'} height={'64'} viewBox={'0 0 510 420'} iconId={'logo'}/>
        </header>   
    );
};

