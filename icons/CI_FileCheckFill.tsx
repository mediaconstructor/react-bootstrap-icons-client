
"use client";
import React from "react";
import {IconProps, FileCheckFill} from "react-bootstrap-icons";

export const CI_FileCheckFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileCheckFill {...props}/>
        </>
    );
}
