
"use client";
import React from "react";
import {IconProps, FileBinary} from "react-bootstrap-icons";

export const CI_FileBinary : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileBinary {...props}/>
        </>
    );
}
