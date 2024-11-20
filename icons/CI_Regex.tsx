
"use client";
import React from "react";
import {IconProps, Regex} from "react-bootstrap-icons";

export const CI_Regex : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Regex {...props}/>
        </>
    );
}
