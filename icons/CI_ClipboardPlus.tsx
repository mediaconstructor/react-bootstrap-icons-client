
"use client";
import React from "react";
import {IconProps, ClipboardPlus} from "react-bootstrap-icons";

export const CI_ClipboardPlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ClipboardPlus {...props}/>
        </>
    );
}
