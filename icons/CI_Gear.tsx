
"use client";
import React from "react";
import {IconProps, Gear} from "react-bootstrap-icons";

export const CI_Gear : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Gear {...props}/>
        </>
    );
}
