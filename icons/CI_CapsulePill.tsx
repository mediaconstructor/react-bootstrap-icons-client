
"use client";
import React from "react";
import {IconProps, CapsulePill} from "react-bootstrap-icons";

export const CI_CapsulePill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CapsulePill {...props}/>
        </>
    );
}
