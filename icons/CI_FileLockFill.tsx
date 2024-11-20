
"use client";
import React from "react";
import {IconProps, FileLockFill} from "react-bootstrap-icons";

export const CI_FileLockFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileLockFill {...props}/>
        </>
    );
}
