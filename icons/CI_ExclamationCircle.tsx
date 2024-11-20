
"use client";
import React from "react";
import {IconProps, ExclamationCircle} from "react-bootstrap-icons";

export const CI_ExclamationCircle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ExclamationCircle {...props}/>
        </>
    );
}
