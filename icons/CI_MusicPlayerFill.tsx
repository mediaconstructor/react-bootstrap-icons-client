
"use client";
import React from "react";
import {IconProps, MusicPlayerFill} from "react-bootstrap-icons";

export const CI_MusicPlayerFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MusicPlayerFill {...props}/>
        </>
    );
}
