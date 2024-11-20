
"use client";
import React from "react";
import {IconProps, Bullseye} from "react-bootstrap-icons";

export const CI_Bullseye : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Bullseye {...props}/>
        </>
    );
}
