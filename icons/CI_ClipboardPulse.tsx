
"use client";
import React from "react";
import {IconProps, ClipboardPulse} from "react-bootstrap-icons";

export const CI_ClipboardPulse : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ClipboardPulse {...props}/>
        </>
    );
}
