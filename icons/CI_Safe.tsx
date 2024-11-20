
"use client";
import React from "react";
import {IconProps, Safe} from "react-bootstrap-icons";

export const CI_Safe : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Safe {...props}/>
        </>
    );
}
