
"use client";
import React from "react";
import {IconProps, FileText} from "react-bootstrap-icons";

export const CI_FileText : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileText {...props}/>
        </>
    );
}
