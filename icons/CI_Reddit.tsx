
"use client";
import React from "react";
import {IconProps, Reddit} from "react-bootstrap-icons";

export const CI_Reddit : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Reddit {...props}/>
        </>
    );
}
