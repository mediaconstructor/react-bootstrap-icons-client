
"use client";
import React from "react";
import {IconProps, ExclamationTriangle} from "react-bootstrap-icons";

export const CI_ExclamationTriangle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ExclamationTriangle {...props}/>
        </>
    );
}
