
"use client";
import React from "react";
import {IconProps, BorderWidth} from "react-bootstrap-icons";

export const CI_BorderWidth : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BorderWidth {...props}/>
        </>
    );
}
