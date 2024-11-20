
"use client";
import React from "react";
import {IconProps, Highlighter} from "react-bootstrap-icons";

export const CI_Highlighter : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Highlighter {...props}/>
        </>
    );
}
