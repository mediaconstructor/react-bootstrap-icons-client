
"use client";
import React from "react";
import {IconProps, ShieldExclamation} from "react-bootstrap-icons";

export const CI_ShieldExclamation : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ShieldExclamation {...props}/>
        </>
    );
}
