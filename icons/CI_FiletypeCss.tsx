
"use client";
import React from "react";
import {IconProps, FiletypeCss} from "react-bootstrap-icons";

export const CI_FiletypeCss : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FiletypeCss {...props}/>
        </>
    );
}
