
"use client";
import React from "react";
import {IconProps, FileBreak} from "react-bootstrap-icons";

export const CI_FileBreak : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileBreak {...props}/>
        </>
    );
}
