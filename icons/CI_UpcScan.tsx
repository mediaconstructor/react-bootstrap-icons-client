
"use client";
import React from "react";
import {IconProps, UpcScan} from "react-bootstrap-icons";

export const CI_UpcScan : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <UpcScan {...props}/>
        </>
    );
}
