
"use client";
import React from "react";
import {IconProps, File} from "react-bootstrap-icons";

export const CI_File : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <File {...props}/>
        </>
    );
}
