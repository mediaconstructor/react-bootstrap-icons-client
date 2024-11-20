
"use client";
import React from "react";
import {IconProps, WindowPlus} from "react-bootstrap-icons";

export const CI_WindowPlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <WindowPlus {...props}/>
        </>
    );
}
