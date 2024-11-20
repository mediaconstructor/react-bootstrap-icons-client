
"use client";
import React from "react";
import {IconProps, ShieldCheck} from "react-bootstrap-icons";

export const CI_ShieldCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ShieldCheck {...props}/>
        </>
    );
}
