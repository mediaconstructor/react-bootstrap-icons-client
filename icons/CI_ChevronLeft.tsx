
"use client";
import React from "react";
import {IconProps, ChevronLeft} from "react-bootstrap-icons";

export const CI_ChevronLeft : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChevronLeft {...props}/>
        </>
    );
}
