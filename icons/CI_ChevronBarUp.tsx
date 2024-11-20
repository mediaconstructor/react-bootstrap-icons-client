
"use client";
import React from "react";
import {IconProps, ChevronBarUp} from "react-bootstrap-icons";

export const CI_ChevronBarUp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChevronBarUp {...props}/>
        </>
    );
}
