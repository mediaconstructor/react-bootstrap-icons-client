
"use client";
import React from "react";
import {IconProps, Exclamation} from "react-bootstrap-icons";

export const CI_Exclamation : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Exclamation {...props}/>
        </>
    );
}
