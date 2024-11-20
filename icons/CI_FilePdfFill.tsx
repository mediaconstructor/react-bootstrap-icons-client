
"use client";
import React from "react";
import {IconProps, FilePdfFill} from "react-bootstrap-icons";

export const CI_FilePdfFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FilePdfFill {...props}/>
        </>
    );
}
