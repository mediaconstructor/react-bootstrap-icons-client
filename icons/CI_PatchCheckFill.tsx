
"use client";
import React from "react";
import {IconProps, PatchCheckFill} from "react-bootstrap-icons";

export const CI_PatchCheckFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PatchCheckFill {...props}/>
        </>
    );
}
