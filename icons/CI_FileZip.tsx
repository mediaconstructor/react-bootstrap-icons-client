
"use client";
import React from "react";
import {IconProps, FileZip} from "react-bootstrap-icons";

export const CI_FileZip : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileZip {...props}/>
        </>
    );
}
