
"use client";
import React from "react";
import {IconProps, Ban} from "react-bootstrap-icons";

export const CI_Ban : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Ban {...props}/>
        </>
    );
}
