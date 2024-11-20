
"use client";
import React from "react";
import {IconProps, BorderStyle} from "react-bootstrap-icons";

export const CI_BorderStyle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BorderStyle {...props}/>
        </>
    );
}
