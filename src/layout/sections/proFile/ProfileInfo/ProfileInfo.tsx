import React from 'react';
import mainImg from "../../../../assets/forest.jpg";
import s from './ProfileInfo.module.css'
import avatar from "../../../../assets/avatar.jpg";

type ProfileInfoPropsType = {

}

export const ProfileInfo = ({}: ProfileInfoPropsType) => {
    return (
        <div className={s.profileWrapper}>
            <img className='mainImg' src={mainImg} alt="pro file"/>
            <div className={s.accountInfoWrapper}>
                <img src={avatar} alt="avatar"/>
                <div>
                    <span>Bair</span>
                    <div className={s.textWrapper}>
                        <span>Date of Birth</span>
                        <span>City</span>
                        <span>Education</span>
                        <span>Website</span>
                    </div>
                </div>
            </div>
        </div>
    );
};