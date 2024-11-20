
"use client";
import React from "react";
import {IconProps, Shield} from "react-bootstrap-icons";

export const CI_Shield : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Shield {...props}/>
        </>
    );
}
