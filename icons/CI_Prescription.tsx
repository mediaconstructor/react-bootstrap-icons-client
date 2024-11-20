
"use client";
import React from "react";
import {IconProps, Prescription} from "react-bootstrap-icons";

export const CI_Prescription : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Prescription {...props}/>
        </>
    );
}
