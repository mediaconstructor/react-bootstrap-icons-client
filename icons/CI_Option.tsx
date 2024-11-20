
"use client";
import React from "react";
import {IconProps, Option} from "react-bootstrap-icons";

export const CI_Option : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Option {...props}/>
        </>
    );
}
