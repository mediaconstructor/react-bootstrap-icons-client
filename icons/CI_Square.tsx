
"use client";
import React from "react";
import {IconProps, Square} from "react-bootstrap-icons";

export const CI_Square : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Square {...props}/>
        </>
    );
}
