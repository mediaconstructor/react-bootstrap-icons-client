
"use client";
import React from "react";
import {IconProps, LayoutSplit} from "react-bootstrap-icons";

export const CI_LayoutSplit : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <LayoutSplit {...props}/>
        </>
    );
}
