
"use client";
import React from "react";
import {IconProps, ClipboardMinus} from "react-bootstrap-icons";

export const CI_ClipboardMinus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ClipboardMinus {...props}/>
        </>
    );
}
