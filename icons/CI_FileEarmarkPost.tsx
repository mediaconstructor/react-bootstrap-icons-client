
"use client";
import React from "react";
import {IconProps, FileEarmarkPost} from "react-bootstrap-icons";

export const CI_FileEarmarkPost : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkPost {...props}/>
        </>
    );
}
