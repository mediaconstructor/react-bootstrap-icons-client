
"use client";
import React from "react";
import {IconProps, FileArrowDown} from "react-bootstrap-icons";

export const CI_FileArrowDown : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileArrowDown {...props}/>
        </>
    );
}
