
"use client";
import React from "react";
import {IconProps, FileEarmarkText} from "react-bootstrap-icons";

export const CI_FileEarmarkText : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkText {...props}/>
        </>
    );
}
