
"use client";
import React from "react";
import {IconProps, Eraser} from "react-bootstrap-icons";

export const CI_Eraser : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Eraser {...props}/>
        </>
    );
}
