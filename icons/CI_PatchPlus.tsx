
"use client";
import React from "react";
import {IconProps, PatchPlus} from "react-bootstrap-icons";

export const CI_PatchPlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PatchPlus {...props}/>
        </>
    );
}
