
"use client";
import React from "react";
import {IconProps, FileCode} from "react-bootstrap-icons";

export const CI_FileCode : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileCode {...props}/>
        </>
    );
}
