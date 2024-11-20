
"use client";
import React from "react";
import {IconProps, Cookie} from "react-bootstrap-icons";

export const CI_Cookie : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Cookie {...props}/>
        </>
    );
}
