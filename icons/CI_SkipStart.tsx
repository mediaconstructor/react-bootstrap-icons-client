
"use client";
import React from "react";
import {IconProps, SkipStart} from "react-bootstrap-icons";

export const CI_SkipStart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SkipStart {...props}/>
        </>
    );
}
