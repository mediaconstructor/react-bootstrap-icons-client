
"use client";
import React from "react";
import {IconProps, Shadows} from "react-bootstrap-icons";

export const CI_Shadows : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Shadows {...props}/>
        </>
    );
}
