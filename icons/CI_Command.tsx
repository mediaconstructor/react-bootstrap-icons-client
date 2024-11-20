
"use client";
import React from "react";
import {IconProps, Command} from "react-bootstrap-icons";

export const CI_Command : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Command {...props}/>
        </>
    );
}
