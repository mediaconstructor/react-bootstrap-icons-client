
"use client";
import React from "react";
import {IconProps, MenuButtonWide} from "react-bootstrap-icons";

export const CI_MenuButtonWide : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MenuButtonWide {...props}/>
        </>
    );
}
