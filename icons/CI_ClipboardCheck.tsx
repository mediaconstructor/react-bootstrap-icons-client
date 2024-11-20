
"use client";
import React from "react";
import {IconProps, ClipboardCheck} from "react-bootstrap-icons";

export const CI_ClipboardCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ClipboardCheck {...props}/>
        </>
    );
}
