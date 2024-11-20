
"use client";
import React from "react";
import {IconProps, ClipboardX} from "react-bootstrap-icons";

export const CI_ClipboardX : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ClipboardX {...props}/>
        </>
    );
}
