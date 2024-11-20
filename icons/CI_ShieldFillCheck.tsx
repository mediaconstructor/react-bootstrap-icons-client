
"use client";
import React from "react";
import {IconProps, ShieldFillCheck} from "react-bootstrap-icons";

export const CI_ShieldFillCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ShieldFillCheck {...props}/>
        </>
    );
}
