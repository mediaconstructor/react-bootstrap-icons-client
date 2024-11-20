
"use client";
import React from "react";
import {IconProps, Cpu} from "react-bootstrap-icons";

export const CI_Cpu : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Cpu {...props}/>
        </>
    );
}
