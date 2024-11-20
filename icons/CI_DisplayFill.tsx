
"use client";
import React from "react";
import {IconProps, DisplayFill} from "react-bootstrap-icons";

export const CI_DisplayFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DisplayFill {...props}/>
        </>
    );
}
