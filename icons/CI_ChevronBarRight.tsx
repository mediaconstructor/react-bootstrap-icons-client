
"use client";
import React from "react";
import {IconProps, ChevronBarRight} from "react-bootstrap-icons";

export const CI_ChevronBarRight : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChevronBarRight {...props}/>
        </>
    );
}
