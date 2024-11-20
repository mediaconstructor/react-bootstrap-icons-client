
"use client";
import React from "react";
import {IconProps, FolderPlus} from "react-bootstrap-icons";

export const CI_FolderPlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FolderPlus {...props}/>
        </>
    );
}
