
"use client";
import React from "react";
import {IconProps, FileImageFill} from "react-bootstrap-icons";

export const CI_FileImageFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileImageFill {...props}/>
        </>
    );
}
