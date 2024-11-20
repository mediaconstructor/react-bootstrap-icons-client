
"use client";
import React from "react";
import {IconProps, TextareaResize} from "react-bootstrap-icons";

export const CI_TextareaResize : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TextareaResize {...props}/>
        </>
    );
}
