
"use client";
import React from "react";
import {IconProps, FileWord} from "react-bootstrap-icons";

export const CI_FileWord : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileWord {...props}/>
        </>
    );
}
