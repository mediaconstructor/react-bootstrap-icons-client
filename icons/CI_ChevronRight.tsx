
"use client";
import React from "react";
import {IconProps, ChevronRight} from "react-bootstrap-icons";

export const CI_ChevronRight : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChevronRight {...props}/>
        </>
    );
}
