
"use client";
import React from "react";
import {IconProps, MicMute} from "react-bootstrap-icons";

export const CI_MicMute : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MicMute {...props}/>
        </>
    );
}
