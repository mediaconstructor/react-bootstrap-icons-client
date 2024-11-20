
"use client";
import React from "react";
import {IconProps, FolderX} from "react-bootstrap-icons";

export const CI_FolderX : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FolderX {...props}/>
        </>
    );
}
