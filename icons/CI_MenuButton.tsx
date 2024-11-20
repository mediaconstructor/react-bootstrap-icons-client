
"use client";
import React from "react";
import {IconProps, MenuButton} from "react-bootstrap-icons";

export const CI_MenuButton : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MenuButton {...props}/>
        </>
    );
}
