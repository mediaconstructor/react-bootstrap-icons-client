
"use client";
import React from "react";
import {IconProps, Bank} from "react-bootstrap-icons";

export const CI_Bank : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Bank {...props}/>
        </>
    );
}
