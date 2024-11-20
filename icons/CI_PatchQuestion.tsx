
"use client";
import React from "react";
import {IconProps, PatchQuestion} from "react-bootstrap-icons";

export const CI_PatchQuestion : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PatchQuestion {...props}/>
        </>
    );
}
