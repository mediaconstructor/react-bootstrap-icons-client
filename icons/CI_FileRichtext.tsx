
"use client";
import React from "react";
import {IconProps, FileRichtext} from "react-bootstrap-icons";

export const CI_FileRichtext : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileRichtext {...props}/>
        </>
    );
}
