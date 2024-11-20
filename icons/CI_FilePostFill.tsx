
"use client";
import React from "react";
import {IconProps, FilePostFill} from "react-bootstrap-icons";

export const CI_FilePostFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FilePostFill {...props}/>
        </>
    );
}
