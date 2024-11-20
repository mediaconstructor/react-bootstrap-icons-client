
"use client";
import React from "react";
import {IconProps, FolderSymlink} from "react-bootstrap-icons";

export const CI_FolderSymlink : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FolderSymlink {...props}/>
        </>
    );
}
