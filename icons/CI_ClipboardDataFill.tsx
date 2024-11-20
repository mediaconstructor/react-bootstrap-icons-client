
"use client";
import React from "react";
import {IconProps, ClipboardDataFill} from "react-bootstrap-icons";

export const CI_ClipboardDataFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ClipboardDataFill {...props}/>
        </>
    );
}
