
"use client";
import React from "react";
import {IconProps, FilePdf} from "react-bootstrap-icons";

export const CI_FilePdf : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FilePdf {...props}/>
        </>
    );
}
