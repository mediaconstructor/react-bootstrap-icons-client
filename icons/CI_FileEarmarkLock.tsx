
"use client";
import React from "react";
import {IconProps, FileEarmarkLock} from "react-bootstrap-icons";

export const CI_FileEarmarkLock : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkLock {...props}/>
        </>
    );
}
