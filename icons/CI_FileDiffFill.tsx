
"use client";
import React from "react";
import {IconProps, FileDiffFill} from "react-bootstrap-icons";

export const CI_FileDiffFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileDiffFill {...props}/>
        </>
    );
}
