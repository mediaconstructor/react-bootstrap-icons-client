
"use client";
import React from "react";
import {IconProps, FileSlides} from "react-bootstrap-icons";

export const CI_FileSlides : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileSlides {...props}/>
        </>
    );
}
