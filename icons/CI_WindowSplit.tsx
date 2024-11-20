
"use client";
import React from "react";
import {IconProps, WindowSplit} from "react-bootstrap-icons";

export const CI_WindowSplit : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <WindowSplit {...props}/>
        </>
    );
}
