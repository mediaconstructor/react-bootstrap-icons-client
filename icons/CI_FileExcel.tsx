
"use client";
import React from "react";
import {IconProps, FileExcel} from "react-bootstrap-icons";

export const CI_FileExcel : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileExcel {...props}/>
        </>
    );
}
