
"use client";
import React from "react";
import {IconProps, ClipboardFill} from "react-bootstrap-icons";

export const CI_ClipboardFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ClipboardFill {...props}/>
        </>
    );
}
