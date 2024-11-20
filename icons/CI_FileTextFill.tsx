
"use client";
import React from "react";
import {IconProps, FileTextFill} from "react-bootstrap-icons";

export const CI_FileTextFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileTextFill {...props}/>
        </>
    );
}
