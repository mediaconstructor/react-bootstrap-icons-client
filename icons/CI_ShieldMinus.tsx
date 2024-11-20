
"use client";
import React from "react";
import {IconProps, ShieldMinus} from "react-bootstrap-icons";

export const CI_ShieldMinus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ShieldMinus {...props}/>
        </>
    );
}
