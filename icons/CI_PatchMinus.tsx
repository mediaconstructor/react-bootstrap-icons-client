
"use client";
import React from "react";
import {IconProps, PatchMinus} from "react-bootstrap-icons";

export const CI_PatchMinus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PatchMinus {...props}/>
        </>
    );
}
