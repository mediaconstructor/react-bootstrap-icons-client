
"use client";
import React from "react";
import {IconProps, CloudyFill} from "react-bootstrap-icons";

export const CI_CloudyFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CloudyFill {...props}/>
        </>
    );
}
