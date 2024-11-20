
"use client";
import React from "react";
import {IconProps, PatchCheck} from "react-bootstrap-icons";

export const CI_PatchCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PatchCheck {...props}/>
        </>
    );
}
