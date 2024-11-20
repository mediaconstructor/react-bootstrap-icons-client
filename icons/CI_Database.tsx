
"use client";
import React from "react";
import {IconProps, Database} from "react-bootstrap-icons";

export const CI_Database : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Database {...props}/>
        </>
    );
}
