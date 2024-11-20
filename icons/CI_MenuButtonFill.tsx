
"use client";
import React from "react";
import {IconProps, MenuButtonFill} from "react-bootstrap-icons";

export const CI_MenuButtonFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MenuButtonFill {...props}/>
        </>
    );
}
