
"use client";
import React from "react";
import {IconProps, FilterSquare} from "react-bootstrap-icons";

export const CI_FilterSquare : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FilterSquare {...props}/>
        </>
    );
}
