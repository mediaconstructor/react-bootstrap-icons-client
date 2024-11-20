
"use client";
import React from "react";
import {IconProps, Github} from "react-bootstrap-icons";

export const CI_Github : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Github {...props}/>
        </>
    );
}
