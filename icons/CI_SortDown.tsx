
"use client";
import React from "react";
import {IconProps, SortDown} from "react-bootstrap-icons";

export const CI_SortDown : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SortDown {...props}/>
        </>
    );
}
