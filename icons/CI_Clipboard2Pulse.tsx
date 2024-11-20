
"use client";
import React from "react";
import {IconProps, Clipboard2Pulse} from "react-bootstrap-icons";

export const CI_Clipboard2Pulse : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Clipboard2Pulse {...props}/>
        </>
    );
}
