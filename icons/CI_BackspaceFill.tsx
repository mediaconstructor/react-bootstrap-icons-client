
"use client";
import React from "react";
import {IconProps, BackspaceFill} from "react-bootstrap-icons";

export const CI_BackspaceFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BackspaceFill {...props}/>
        </>
    );
}
