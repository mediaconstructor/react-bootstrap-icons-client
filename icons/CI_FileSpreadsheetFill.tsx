
"use client";
import React from "react";
import {IconProps, FileSpreadsheetFill} from "react-bootstrap-icons";

export const CI_FileSpreadsheetFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileSpreadsheetFill {...props}/>
        </>
    );
}
