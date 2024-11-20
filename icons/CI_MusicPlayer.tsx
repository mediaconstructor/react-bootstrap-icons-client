
"use client";
import React from "react";
import {IconProps, MusicPlayer} from "react-bootstrap-icons";

export const CI_MusicPlayer : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MusicPlayer {...props}/>
        </>
    );
}
