
"use client";
import React from "react";
import {IconProps, FilePost} from "react-bootstrap-icons";

export const CI_FilePost : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FilePost {...props}/>
        </>
    );
}
