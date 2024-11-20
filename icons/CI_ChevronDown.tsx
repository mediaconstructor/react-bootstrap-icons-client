
"use client";
import React from "react";
import {IconProps, ChevronDown} from "react-bootstrap-icons";

export const CI_ChevronDown : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChevronDown {...props}/>
        </>
    );
}
