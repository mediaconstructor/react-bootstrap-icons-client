
"use client";
import React from "react";
import {IconProps, GraphDownArrow} from "react-bootstrap-icons";

export const CI_GraphDownArrow : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <GraphDownArrow {...props}/>
        </>
    );
}
