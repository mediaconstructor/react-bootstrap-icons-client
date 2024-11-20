
"use client";
import React from "react";
import {IconProps, SafeFill} from "react-bootstrap-icons";

export const CI_SafeFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SafeFill {...props}/>
        </>
    );
}
