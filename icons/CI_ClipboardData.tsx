
"use client";
import React from "react";
import {IconProps, ClipboardData} from "react-bootstrap-icons";

export const CI_ClipboardData : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ClipboardData {...props}/>
        </>
    );
}
