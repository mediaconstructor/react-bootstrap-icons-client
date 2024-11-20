
"use client";
import React from "react";
import {IconProps, Pentagon} from "react-bootstrap-icons";

export const CI_Pentagon : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Pentagon {...props}/>
        </>
    );
}
