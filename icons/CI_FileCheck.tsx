
"use client";
import React from "react";
import {IconProps, FileCheck} from "react-bootstrap-icons";

export const CI_FileCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileCheck {...props}/>
        </>
    );
}
