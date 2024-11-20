
"use client";
import React from "react";
import {IconProps, FileLock} from "react-bootstrap-icons";

export const CI_FileLock : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileLock {...props}/>
        </>
    );
}
