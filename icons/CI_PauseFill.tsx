
"use client";
import React from "react";
import {IconProps, PauseFill} from "react-bootstrap-icons";

export const CI_PauseFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PauseFill {...props}/>
        </>
    );
}
