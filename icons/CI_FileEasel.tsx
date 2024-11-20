
"use client";
import React from "react";
import {IconProps, FileEasel} from "react-bootstrap-icons";

export const CI_FileEasel : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEasel {...props}/>
        </>
    );
}
