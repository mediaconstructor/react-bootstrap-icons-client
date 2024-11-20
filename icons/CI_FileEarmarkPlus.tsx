
"use client";
import React from "react";
import {IconProps, FileEarmarkPlus} from "react-bootstrap-icons";

export const CI_FileEarmarkPlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileEarmarkPlus {...props}/>
        </>
    );
}
