
"use client";
import React from "react";
import {IconProps, Memory} from "react-bootstrap-icons";

export const CI_Memory : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Memory {...props}/>
        </>
    );
}
