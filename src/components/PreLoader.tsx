import React from 'react';
import preLoader from "../assets/bouncing-circles.svg";

type PreLoaderPropsType = {

}

export const PreLoader = ({}: PreLoaderPropsType) => {
    return (
        <div>
            <img src={preLoader} alt="preLoader" style={{width: '100px'}}/>
        </div>
    );
};