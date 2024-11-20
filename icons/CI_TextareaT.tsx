
"use client";
import React from "react";
import {IconProps, TextareaT} from "react-bootstrap-icons";

export const CI_TextareaT : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TextareaT {...props}/>
        </>
    );
}
