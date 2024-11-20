
"use client";
import React from "react";
import {IconProps, ChevronUp} from "react-bootstrap-icons";

export const CI_ChevronUp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChevronUp {...props}/>
        </>
    );
}
