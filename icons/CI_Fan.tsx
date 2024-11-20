
"use client";
import React from "react";
import {IconProps, Fan} from "react-bootstrap-icons";

export const CI_Fan : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Fan {...props}/>
        </>
    );
}
