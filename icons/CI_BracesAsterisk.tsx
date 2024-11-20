
"use client";
import React from "react";
import {IconProps, BracesAsterisk} from "react-bootstrap-icons";

export const CI_BracesAsterisk : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BracesAsterisk {...props}/>
        </>
    );
}
