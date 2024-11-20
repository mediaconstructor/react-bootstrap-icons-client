
"use client";
import React from "react";
import {IconProps, CheckCircle} from "react-bootstrap-icons";

export const CI_CheckCircle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CheckCircle {...props}/>
        </>
    );
}
