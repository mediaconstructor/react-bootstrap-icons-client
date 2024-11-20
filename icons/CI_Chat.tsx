
"use client";
import React from "react";
import {IconProps, Chat} from "react-bootstrap-icons";

export const CI_Chat : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Chat {...props}/>
        </>
    );
}
