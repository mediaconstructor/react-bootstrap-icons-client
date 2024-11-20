
"use client";
import React from "react";
import {IconProps, FileX} from "react-bootstrap-icons";

export const CI_FileX : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileX {...props}/>
        </>
    );
}
