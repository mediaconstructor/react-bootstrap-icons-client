
"use client";
import React from "react";
import {IconProps, CloudHail} from "react-bootstrap-icons";

export const CI_CloudHail : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CloudHail {...props}/>
        </>
    );
}
