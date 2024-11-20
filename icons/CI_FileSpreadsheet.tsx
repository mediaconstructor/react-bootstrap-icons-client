
"use client";
import React from "react";
import {IconProps, FileSpreadsheet} from "react-bootstrap-icons";

export const CI_FileSpreadsheet : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileSpreadsheet {...props}/>
        </>
    );
}
