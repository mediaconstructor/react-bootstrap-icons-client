
"use client";
import React from "react";
import {IconProps, MusicNote} from "react-bootstrap-icons";

export const CI_MusicNote : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MusicNote {...props}/>
        </>
    );
}
