
"use client";
import React from "react";
import {IconProps, Server} from "react-bootstrap-icons";

export const CI_Server : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Server {...props}/>
        </>
    );
}
