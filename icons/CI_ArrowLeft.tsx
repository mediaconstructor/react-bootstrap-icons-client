
"use client";
import React from "react";
import {IconProps, ArrowLeft} from "react-bootstrap-icons";

export const CI_ArrowLeft : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ArrowLeft {...props}/>
        </>
    );
}
