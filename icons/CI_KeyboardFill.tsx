
"use client";
import React from "react";
import {IconProps, KeyboardFill} from "react-bootstrap-icons";

export const CI_KeyboardFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <KeyboardFill {...props}/>
        </>
    );
}
