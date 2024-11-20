
"use client";
import React from "react";
import {IconProps, HeartPulse} from "react-bootstrap-icons";

export const CI_HeartPulse : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HeartPulse {...props}/>
        </>
    );
}
