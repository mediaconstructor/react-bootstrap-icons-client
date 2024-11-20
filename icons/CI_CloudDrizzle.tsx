
"use client";
import React from "react";
import {IconProps, CloudDrizzle} from "react-bootstrap-icons";

export const CI_CloudDrizzle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CloudDrizzle {...props}/>
        </>
    );
}
