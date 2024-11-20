
"use client";
import React from "react";
import {IconProps, FileSlidesFill} from "react-bootstrap-icons";

export const CI_FileSlidesFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileSlidesFill {...props}/>
        </>
    );
}
