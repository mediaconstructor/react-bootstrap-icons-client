
"use client";
import React from "react";
import {IconProps, FileEarmarkSpreadsheet} from "react-bootstrap-icons";

export const CI_FileEarmarkSpreadsheet : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkSpreadsheet {...props}/>
        </>
    );
}
