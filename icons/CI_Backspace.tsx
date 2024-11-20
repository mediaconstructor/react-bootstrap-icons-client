
"use client";
import React from "react";
import {IconProps, Backspace} from "react-bootstrap-icons";

export const CI_Backspace : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Backspace {...props}/>
        </>
    );
}
