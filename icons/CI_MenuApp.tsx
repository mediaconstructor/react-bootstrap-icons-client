
"use client";
import React from "react";
import {IconProps, MenuApp} from "react-bootstrap-icons";

export const CI_MenuApp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MenuApp {...props}/>
        </>
    );
}
