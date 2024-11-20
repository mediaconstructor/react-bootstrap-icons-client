
"use client";
import React from "react";
import {IconProps, CpuFill} from "react-bootstrap-icons";

export const CI_CpuFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CpuFill {...props}/>
        </>
    );
}
