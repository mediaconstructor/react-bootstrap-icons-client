
"use client";
import React from "react";
import {IconProps, ChevronBarExpand} from "react-bootstrap-icons";

export const CI_ChevronBarExpand : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChevronBarExpand {...props}/>
        </>
    );
}
