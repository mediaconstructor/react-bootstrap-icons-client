
"use client";
import React from "react";
import {IconProps, FileArrowUp} from "react-bootstrap-icons";

export const CI_FileArrowUp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileArrowUp {...props}/>
        </>
    );
}
