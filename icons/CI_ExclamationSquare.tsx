
"use client";
import React from "react";
import {IconProps, ExclamationSquare} from "react-bootstrap-icons";

export const CI_ExclamationSquare : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ExclamationSquare {...props}/>
        </>
    );
}
