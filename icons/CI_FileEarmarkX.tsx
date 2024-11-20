
"use client";
import React from "react";
import {IconProps, FileEarmarkX} from "react-bootstrap-icons";

export const CI_FileEarmarkX : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkX {...props}/>
        </>
    );
}
