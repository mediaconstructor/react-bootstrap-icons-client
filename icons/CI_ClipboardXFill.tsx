
"use client";
import React from "react";
import {IconProps, ClipboardXFill} from "react-bootstrap-icons";

export const CI_ClipboardXFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ClipboardXFill {...props}/>
        </>
    );
}
