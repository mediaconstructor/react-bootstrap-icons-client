
"use client";
import React from "react";
import {IconProps, ChevronContract} from "react-bootstrap-icons";

export const CI_ChevronContract : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChevronContract {...props}/>
        </>
    );
}
