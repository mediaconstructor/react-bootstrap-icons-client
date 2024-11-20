
"use client";
import React from "react";
import {IconProps, FolderCheck} from "react-bootstrap-icons";

export const CI_FolderCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FolderCheck {...props}/>
        </>
    );
}
