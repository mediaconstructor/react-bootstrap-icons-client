
"use client";
import React from "react";
import {IconProps, FileEarmarkWord} from "react-bootstrap-icons";

export const CI_FileEarmarkWord : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkWord {...props}/>
        </>
    );
}
