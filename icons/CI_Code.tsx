
"use client";
import React from "react";
import {IconProps, Code} from "react-bootstrap-icons";

export const CI_Code : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Code {...props}/>
        </>
    );
}
