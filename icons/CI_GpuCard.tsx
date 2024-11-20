
"use client";
import React from "react";
import {IconProps, GpuCard} from "react-bootstrap-icons";

export const CI_GpuCard : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <GpuCard {...props}/>
        </>
    );
}
