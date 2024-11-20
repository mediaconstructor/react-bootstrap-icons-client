
"use client";
import React from "react";
import {IconProps, ChevronBarContract} from "react-bootstrap-icons";

export const CI_ChevronBarContract : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChevronBarContract {...props}/>
        </>
    );
}
