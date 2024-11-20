
"use client";
import React from "react";
import {IconProps, ChevronBarLeft} from "react-bootstrap-icons";

export const CI_ChevronBarLeft : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChevronBarLeft {...props}/>
        </>
    );
}
