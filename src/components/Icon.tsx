import React from 'react';
import iconSprite from '../assets/icon-sprite.svg'

type IconType = {
    width: string
    height: string
    viewBox: string
    iconId: string
}
export const Icon = ({width, iconId, viewBox, height}: IconType) => {
    return (
        <svg width={width}
             height={height}
             viewBox={viewBox}>
            <use xlinkHref={`${iconSprite}#${iconId}`}/>
        </svg>
    );
};

