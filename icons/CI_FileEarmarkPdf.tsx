
"use client";
import React from "react";
import {IconProps, FileEarmarkPdf} from "react-bootstrap-icons";

export const CI_FileEarmarkPdf : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkPdf {...props}/>
        </>
    );
}
