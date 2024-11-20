
"use client";
import React from "react";
import {IconProps, PatchExclamation} from "react-bootstrap-icons";

export const CI_PatchExclamation : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PatchExclamation {...props}/>
        </>
    );
}
