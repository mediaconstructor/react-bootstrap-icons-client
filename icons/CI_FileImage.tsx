
"use client";
import React from "react";
import {IconProps, FileImage} from "react-bootstrap-icons";

export const CI_FileImage : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileImage {...props}/>
        </>
    );
}
