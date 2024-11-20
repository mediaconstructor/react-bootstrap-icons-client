
"use client";
import React from "react";
import {IconProps, FileEarmark} from "react-bootstrap-icons";

export const CI_FileEarmark : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmark {...props}/>
        </>
    );
}
