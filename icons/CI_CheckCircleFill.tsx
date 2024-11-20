
"use client";
import React from "react";
import {IconProps, CheckCircleFill} from "react-bootstrap-icons";

export const CI_CheckCircleFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CheckCircleFill {...props}/>
        </>
    );
}
