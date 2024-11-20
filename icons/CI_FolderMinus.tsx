
"use client";
import React from "react";
import {IconProps, FolderMinus} from "react-bootstrap-icons";

export const CI_FolderMinus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FolderMinus {...props}/>
        </>
    );
}
