
"use client";
import React from "react";
import {IconProps, Check} from "react-bootstrap-icons";

export const CI_Check : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Check {...props}/>
        </>
    );
}
