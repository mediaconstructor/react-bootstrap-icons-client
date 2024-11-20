
"use client";
import React from "react";
import {IconProps, BackspaceReverse} from "react-bootstrap-icons";

export const CI_BackspaceReverse : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BackspaceReverse {...props}/>
        </>
    );
}
