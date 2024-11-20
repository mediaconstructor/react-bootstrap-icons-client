
"use client";
import React from "react";
import {IconProps, GraphUpArrow} from "react-bootstrap-icons";

export const CI_GraphUpArrow : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <GraphUpArrow {...props}/>
        </>
    );
}
