
"use client";
import React from "react";
import {IconProps, FileEarmarkCode} from "react-bootstrap-icons";

export const CI_FileEarmarkCode : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkCode {...props}/>
        </>
    );
}
